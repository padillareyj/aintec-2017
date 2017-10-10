<?php

require "_env.php";
require 'lib/Exception.php';
require 'lib/PHPMailer.php';
require 'lib/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$p_title = @$_POST['p_title'];
$p_firstname = @$_POST['p_firstname'];
$p_lastname = @$_POST['p_lastname'];
$p_badge = @$_POST['p_badge'];
$p_jobtitle = @$_POST['p_jobtitle'];
$p_organization = $_POST['p_organization'];
$p_phone = @$_POST['p_phone'];
$p_address = @$_POST['p_address'];
$p_email = @$_POST['p_email'];
$p_invitation = @$_POST['p_invitation'];
$p_regfee = @$_POST['p_regfee'];
$dinner = @$_POST['dinner'];
$p_payment = @$_POST['p_payment'];
$error = array();


if ($p_title == '') $error['p_title'] = 'This field is required.';
if ($p_firstname == '') $error['p_firstname'] = 'This field is required.';
if ($p_lastname == '') $error['p_lastname'] = 'This field is required.';
if ($p_jobtitle == '') $error['p_jobtitle'] = 'This field is required.';
if ($p_badge == '') $error['p_badge'] = 'This field is required.';
if ($p_organization == '') $error['p_organization'] = 'This field is required.';
if ($p_address == '') $error['p_address'] = 'This field is required.';
if ($p_email == '') $error['p_email'] = 'This field is required.';
if (!filter_var($p_email, FILTER_VALIDATE_EMAIL) && $p_email != '' ) $error['p_email'] = 'Email address is invalid';

if ($p_invitation == '') $error['p_invitation'] = 'This field is required.';
if ($p_invitation != 'Yes' && $p_invitation != 'No' ) $error['p_invitation'] = 'Please let us know if you need an invitation visa.';

if ($p_regfee == '') $error['p_regfee'] = 'This field is required.';
if ($dinner == '') $error['dinner'] = 'Please let us know if you are joining the Conference Dinner.';
if ($dinner != 'Yes' && $dinner != 'No' ) $error['dinner'] = 'Please let us know if you are joining the Conference Dinner';

if ($p_payment == '') $error['p_payment'] = 'Please select your preferred payment method.';

$result['error'] = $error;
$result['success'] = false;

if (count($error) == 0 )  {

	// check if email is already registered
	$email = $conn->real_escape_string(strtolower($p_email));
	$title = $conn->real_escape_string(strtolower($p_title));
	$firstname = $conn->real_escape_string(strtolower($p_firstname));
	$lastname = $conn->real_escape_string(strtolower($p_lastname));
	$jobtitle = $conn->real_escape_string(strtolower($p_jobtitle));
	$badge = $conn->real_escape_string(strtolower($p_badge));
	$organization = $conn->real_escape_string(strtolower($p_organization));
	$phone = $conn->real_escape_string(strtolower($p_phone));
	$address = $conn->real_escape_string(strtolower($p_address));
	$invitation = $conn->real_escape_string(strtolower($p_invitation));
	$regfee = $conn->real_escape_string(strtolower($p_regfee));
	$dinner = $conn->real_escape_string(strtolower($dinner));
	$payment = $conn->real_escape_string(strtolower($p_payment));

	$sql = "SELECT * FROM member_aintec_17 WHERE email like '$email' ";
	$checkExist = $conn->query($sql);

	$isstudent = 0;
	$registrationscope = 1;

	if ($regFee == 200 ) $isstudent = 1;

	if ($checkExist->num_rows == 0) {

	    // save to database
		$sql = "INSERT INTO member_aintec_17 (title, firstname, lastname, badge, jobtitle, organization,  address,  email,
					phone, regfee, isstudent, registrationscope, payment, dinner, invitation)
					VALUES ('$title', '$firstname', '$lastname', '$badge', '$jobtitle', '$organization', '$address', '$email',
					'$phone', '$regfee', '$isstudent', '$registrationscope', '$payment', '$dinner', '$invitation')";

		if ($conn->query($sql) === TRUE) {
 	 		 $result['success'] = true;

 	 		 // send receipt
 	 		 mailReceipt ($p_title.'. '.$p_firstname.' '. $p_lastname, $p_email, $p_regfee, $p_payment);

		} else {
			echo $conn->error;
			$result['error']['show'] = 'Unable to save to db';
		    $result['success'] = false;
		}


	}  else{
		$result['error']['email']   = 'E-mail address is already registered. For changes to your registration please contact aintec-sec@interab.ait.ac.th';
		$result['error']['show'] = $result['error']['email'];
		$result['success'] = false;
	}

}else {
	$result['error']['show'] = "One or more fields are required or has error.";
}
echo json_encode($result);


function mailReceipt ($name, $email, $p_regfee, $p_payment) {

		// send email to registrant and aintec sec
		$mail = new PHPMailer(true);                              // Passing `true` enables exceptions
		try {
		    //Server settings
		    $mail->SMTPDebug = 0;                                 // Enable verbose debug output
		    $mail->isSMTP();                                      // Set mailer to use SMTP
		    $mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
		    $mail->SMTPAuth = true;                               // Enable SMTP authentication
		    $mail->Username = 'posters-aintec2017@ait.asia';                 // SMTP username
		    $mail->Password = 'Aprgh*4e';                           // SMTP password
		    $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
		    $mail->Port = 587;                                    // TCP port to connect to

		    //Recipients
		    $mail->setFrom('aintec-sec@interlab.ait.ac.th', 'AINTEC SEC');
		    $mail->addAddress($email, $name);     // Add a recipient
		    $mail->addReplyTo('aintec-sec@interlab.ait.ac.th', 'AINTEC SEC');     // Add a recipient

		    // //Attachments

		    // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

		    $paymentBank = '<p >To complete payment by bank draft, please ensure that the draft is written in Thai Bahts and it is payable to <strong>\'Asian Institute of Technology\'</strong>. The bank draft should be sent to the following address, stating your registration details such as name, organization and contact details (postal and e-mail address, telephone and fax numbers).
													<br><br>
														Ms. Glaziel Kae Tagamolila <br>
														Coordinator<br>
														Internet Education and Research Laboratory (intERLab)<br>
														Asian Institute of Technology<br>
														P.O.Box 4, Klong Luang, Pathumthani 12120<br>
														THAILAND
													<br><br>';

			$paymentWire = '<p  >To complete payment by wire transfer to \'Asian Institute of Technology\'
											please use the following account information;</p>
													<br><br>
														 Bank name : Siam Commercial Bank Co., Ltd.<br>
														 Branch : Thammasat University Hospital <br>
														 Bank address : 95 Moo 8, Khlongnueng, Khlongluang, Pathumthani 12120 Thailand<br>
														  Account type : Current<br>
														  Account details : 468-046301-2<br>
														 Account name : Asian Institute of Technology<br>
														  Swift Code : SICOTHBK<br>

													<br><br>
													A fax with details of the wire transfer should be sent to Ms. Glaziel Kae Tagamolila
													 fax no: +66-2-524 6618 stating your registration details such as name,
													organization and contact details (postal and e-mail address, telephone and fax numbers).
													 An email will be sent confirming receipt of your payment.
													<br><br>';

			$paymentCard = '<p>Print out the attached PDF file and fill out the credit card information together with your signature. Then, fax it back to Ms. Glaziel Kae Tagamolila  fax no: +66-2-524 6618 </p>';
		    //Content
		    $mail->isHTML(true);                                  // Set email format to HTML
		    $mail->Subject = 'AINTEC 2017 Registration';

		    $payment = $paymentBank;

		    if ($p_payment == 'Wire Transfer' ) $payment = $paymentWire;
		    if ($p_payment == 'Credit Card' ) {
		    	  $mail->addAttachment('creditcard.pdf');         // Add attachments
		    	  $payment = $paymentCard;
		    }
		    $mail->Body    = 'Dear '.$name.'<br>

<p>Thank you for registering for the AINTEC 2017 Conference.</p>


<p>Your registration Fee: <strong>'.floatval($p_regfee).' USD </strong></p>

'.$payment .'

<p>If you have any questions please contact aintec-sec@interlab.ait.ac.th</p>

<p>Thank you and see you at the conference!</p>

AINTEC SEC
';



		    $mail->AltBody = 'Please read this email with HTML mail clients';

		    $mail->send();


		} catch (Exception $e) {
		    echo 'Message could not be sent.';
		    echo 'Mailer Error: ' . $mail->ErrorInfo;
		}

}