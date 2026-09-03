<?php
/**
 * Prijem kontakt forme sa fortica.rs.
 * Poruka ide u sanduce info@fortica.rs, odakle je forwarderi prosledjuju dalje.
 */
declare(strict_types=1);

date_default_timezone_set('Europe/Belgrade');

const FC_TO   = 'info@fortica.rs';
const FC_FROM = 'info@fortica.rs';
const FC_PAGE = '/contact.html';

function fc_back(string $query): void
{
    header('Location: ' . FC_PAGE . '?' . $query, true, 303);
    exit;
}

/** Novi red u zaglavlju znaci da posetilac moze da ubaci svoje zaglavlje. */
function fc_oneline(string $value): string
{
    return trim(str_replace(["\r", "\n"], ' ', $value));
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    fc_back('error=method');
}

// Polje-mamac: sakriveno je, covek ga ne vidi, bot ga popuni.
// Botu vracamo isti odgovor kao i coveku, da ne nauci sta ga je odalo.
if (fc_oneline((string) ($_POST['website'] ?? '')) !== '') {
    fc_back('sent=1');
}

$name    = fc_oneline((string) ($_POST['name'] ?? ''));
$agency  = fc_oneline((string) ($_POST['agency'] ?? ''));
$email   = fc_oneline((string) ($_POST['email'] ?? ''));
$message = trim((string) ($_POST['message'] ?? ''));

if ($name === '' || $message === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    fc_back('error=1');
}

if (mb_strlen($name) > 200 || mb_strlen($agency) > 200
    || mb_strlen($email) > 254 || mb_strlen($message) > 5000) {
    fc_back('error=1');
}

$subject = 'Sajt fortica.rs — poruka od ' . $name;

$body = "Ime:      $name\n"
      . 'Agencija: ' . ($agency !== '' ? $agency : '—') . "\n"
      . "E-posta:  $email\n"
      . 'IP:       ' . ($_SERVER['REMOTE_ADDR'] ?? '?') . "\n"
      . 'Vreme:    ' . date('d.m.Y. H:i:s') . "\n\n"
      . "Poruka:\n$message\n";

// From ostaje na sopstvenom domenu da SPF i DKIM prolaze.
// Posetiocevu adresu nosi Reply-To, pa Reply ide pravo njemu.
$headers = implode("\r\n", [
    'From: Fortica sajt <' . FC_FROM . '>',
    'Reply-To: ' . $email,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
]);

$encodedSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';

$sent = mail(FC_TO, $encodedSubject, $body, $headers, '-f' . FC_FROM);

fc_back($sent ? 'sent=1' : 'error=send');
