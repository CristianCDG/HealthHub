const nodemailer = require("nodemailer");
const db = require("../database/config");

let logUserName;

const generateRandomUsername = () => {
  const length = 12;
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let userName = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    userName += charset[randomIndex];
  }
  return userName;
};

const sendEmail = (toEmail, role) => {
  return new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: "serviceshealthhub@gmail.com", pass: "dwfctctruxxsvmbe" },
    });

    logUserName = generateRandomUsername();

    let subject, text;
    if (role === "Pediatra") {
      subject = "¡Bienvenido a HealthHub como Pediatra!";
      htmlContent = `
	  <html>
	  
	  <head>
		  <title></title>
		  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		  <meta name="viewport" content="width=device-width, initial-scale=1.0"><!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]--><!--[if !mso]><!-->
		  <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" type="text/css"><!--<![endif]-->
		  <style>
			  * {
				  box-sizing: border-box;
			  }
	  
			  body {
				  margin: 0;
				  padding: 0;
			  }
	  
			  a[x-apple-data-detectors] {
				  color: inherit !important;
				  text-decoration: inherit !important;
			  }
	  
			  #MessageViewBody a {
				  color: inherit;
				  text-decoration: none;
			  }
	  
			  p {
				  line-height: inherit
			  }
	  
			  .desktop_hide,
			  .desktop_hide table {
				  mso-hide: all;
				  display: none;
				  max-height: 0px;
				  overflow: hidden;
			  }
	  
			  .image_block img+div {
				  display: none;
			  }
	  
			  @media (max-width:660px) {
				  .desktop_hide table.icons-inner {
					  display: inline-block !important;
				  }
	  
				  .icons-inner {
					  text-align: center;
				  }
	  
				  .icons-inner td {
					  margin: 0 auto;
				  }
	  
				  .image_block img.fullWidth {
					  max-width: 100% !important;
				  }
	  
				  .mobile_hide {
					  display: none;
				  }
	  
				  .row-content {
					  width: 100% !important;
				  }
	  
				  .stack .column {
					  width: 100%;
					  display: block;
				  }
	  
				  .mobile_hide {
					  min-height: 0;
					  max-height: 0;
					  max-width: 0;
					  overflow: hidden;
					  font-size: 0px;
				  }
	  
				  .desktop_hide,
				  .desktop_hide table {
					  display: table !important;
					  max-height: none !important;
				  }
	  
				  .reverse {
					  display: table;
					  width: 100%;
				  }
	  
				  .reverse .column.first {
					  display: table-footer-group !important;
				  }
	  
				  .reverse .column.last {
					  display: table-header-group !important;
				  }
	  
				  .row-7 td.column.first .border,
				  .row-7 td.column.last .border {
					  padding: 15px 0;
					  border-top: 0;
					  border-right: 0px;
					  border-bottom: 0;
					  border-left: 0;
				  }
			  }
		  </style>
	  </head>
	  
	  <body style="background-color: #1453a3; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
		  <table class="nl-container" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #1453a3;">
			  <tbody>
				  <tr>
					  <td>
						  <table class="row row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
							  <tbody>
								  <tr>
									  <td>
										  <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-image: url('https://d1oco4z2z1fhwp.cloudfront.net/templates/default/4186/gradient-back-to-school.png'); background-position: center top; background-repeat: repeat; color: #000; width: 640px; margin: 0 auto;" width="640">
											  <tbody>
												  <tr>
													  <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
														  <table class="heading_block block-1" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
															  <tr>
																  <td class="pad">
																	  <h1 style="margin: 0; color: #7747FF; direction: ltr; font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 38px; font-weight: 700; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;"><span style="color: #000000;"><strong><span class="tinyMce-placeholder">HealthHub</span></strong></span></h1>
																  </td>
															  </tr>
														  </table>
														  <table class="heading_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
															  <tr>
																  <td class="pad" style="padding-left:20px;padding-right:20px;padding-top:5px;text-align:center;width:100%;">
																	  <h1 style="margin: 0; color: #ffffff; direction: ltr; font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 40px; font-weight: 700; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;"><span class="tinyMce-placeholder">Bienvenido Pediatra</span></h1>
																  </td>
															  </tr>
														  </table>
														  <table class="heading_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
															  <tr>
																  <td class="pad" style="padding-bottom:10px;padding-left:20px;padding-right:20px;padding-top:20px;text-align:center;width:100%;">
																	  <h2 style="margin: 0; color: #ffffff; direction: ltr; font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 23px; font-weight: normal; letter-spacing: 1px; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;"><span class="tinyMce-placeholder"></span></h2>
																  </td>
															  </tr>
														  </table>
														  <table class="paragraph_block block-4" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
															  <tr>
																  <td class="pad" style="padding-bottom:10px;padding-left:20px;padding-right:20px;padding-top:10px;">
																	  <div style="color:#ffffff;font-family:Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;font-size:18px;line-height:150%;text-align:center;mso-line-height-alt:27px;">
																		  <p style="margin: 0; word-break: break-word;">¡Bienvenido a HealthHub! Estamos encantados de tenerte como parte de nuestra comunidad. Para completar tu registro y desbloquear todas las funciones de nuestra plataforma, necesitamos que sigas estos sencillos pasos.</p>
																	  </div>
																  </td>
															  </tr>
														  </table>
														  <table class="button_block block-5" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
															  <tr>
																  <td class="pad" style="padding-bottom:45px;padding-left:10px;padding-right:10px;padding-top:40px;text-align:center;">
																	  <div class="alignment" align="center"><!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" style="height:42px;width:469px;v-text-anchor:middle;" arcsize="72%" strokeweight="1.5pt" strokecolor="#FFFFFF" fill="false"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#ffffff; font-family:Arial, sans-serif; font-size:16px"><![endif]--><a target="_blank" style="text-decoration:none;display:block;color:#ffffff;background-color:transparent;border-radius:30px;width:75%;border-top:2px solid #FFFFFF;font-weight:undefined;border-right:2px solid #FFFFFF;border-bottom:2px solid #FFFFFF;border-left:2px solid #FFFFFF;padding-top:5px;padding-bottom:5px;font-family:Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;font-size:16px;text-align:center;mso-border-alt:none;word-break:keep-all;"><span style="padding-left:20px;padding-right:20px;font-size:16px;display:inline-block;letter-spacing:normal;"><span style="word-break:break-word;"><strong><span style="line-height: 32px;" data-mce-style>Su username es: ${logUserName}</span></strong></span></span></a><!--[if mso]></center></v:textbox></v:roundrect><![endif]--></div>
																  </td>
															  </tr>
														  </table>
													  </td>
												  </tr>
											  </tbody>
										  </table>
									  </td>
								  </tr>
							  </tbody>
						  </table>
						  <table class="row row-2" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
							  <tbody>
								  <tr>
									  <td>
										  <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000; width: 640px; margin: 0 auto;" width="640">
											  <tbody>
												  <tr>
													  <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
														  <table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
															  <tr>
																  <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
																	  <div class="alignment" align="center" style="line-height:10px"><img class="fullWidth" src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/4186/blue-top.png" style="display: block; height: auto; border: 0; max-width: 640px; width: 100%;" width="640"></div>
																  </td>
															  </tr>
														  </table>
													  </td>
												  </tr>
											  </tbody>
										  </table>
									  </td>
								  </tr>
							  </tbody>
						  </table>
						  <table class="row row-3" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
							  <tbody>
								  <tr>
									  <td>
										  <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #1cb0f6; color: #000; width: 640px; margin: 0 auto;" width="640">
											  <tbody>
												  <tr>
													  <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
														  <table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
															  <tr>
																  <td class="pad" style="padding-bottom:15px;padding-top:15px;width:100%;padding-right:0px;padding-left:0px;">
																	  <div class="alignment" align="center" style="line-height:10px"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/4186/math.png" style="display: block; height: auto; border: 0; max-width: 256px; width: 100%;" width="256" alt="Math" title="Math"></div>
																  </td>
															  </tr>
														  </table>
													  </td>
												  </tr>
											  </tbody>
										  </table>
									  </td>
								  </tr>
							  </tbody>
						  </table>
						  <table class="row row-4" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
							  <tbody>
								  <tr>
									  <td>
										  <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #1cb0f6; color: #000; width: 640px; margin: 0 auto;" width="640">
											  <tbody>
												  <tr>
													  <td class="column column-1" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 15px; padding-top: 15px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
														  <table class="heading_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
															  <tr>
																  <td class="pad" style="text-align:center;width:100%;">
																	  <h3 style="margin: 0; color: #ffffff; direction: ltr; font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 24px; font-weight: normal; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;"><strong>Nutrición personalizada para cada bebé.&nbsp;</strong></h3>
																  </td>
															  </tr>
														  </table>
														  <table class="paragraph_block block-2" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
															  <tr>
																  <td class="pad">
																	  <div style="color:#ffffff;font-family:Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;font-size:18px;line-height:120%;text-align:center;mso-line-height-alt:21.599999999999998px;">
																		  <p style="margin: 0; word-break: break-word;">¡Registra, planifica y sigue el crecimiento de tus pequeños pacientes en nuestra plataforma especializada!</p>
																	  </div>
																  </td>
															  </tr>
														  </table>
													  </td>
													  <td class="column column-2" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 15px; padding-top: 15px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
														  <table class="heading_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
															  <tr>
																  <td class="pad" style="text-align:center;width:100%;">
																	  <h3 style="margin: 0; color: #ffffff; direction: ltr; font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 24px; font-weight: normal; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;"><strong>Cuida de tus pacientes desde el primer bocado.&nbsp;</strong></h3>
																  </td>
															  </tr>
														  </table>
														  <table class="paragraph_block block-2" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
															  <tr>
																  <td class="pad">
																	  <div style="color:#ffffff;font-family:Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;font-size:18px;line-height:120%;text-align:center;mso-line-height-alt:21.599999999999998px;">
																		  <p style="margin: 0; word-break: break-word;">Registra planes de alimentación, detecta alergias y sigue el desarrollo de cada bebé de cerca.</p>
																	  </div>
																  </td>
															  </tr>
														  </table>
													  </td>
												  </tr>
											  </tbody>
										  </table>
									  </td>
								  </tr>
							  </tbody>
						  </table>
						  <table class="row row-5" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
							  <tbody>
								  <tr>
									  <td>
										  <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000; width: 640px; margin: 0 auto;" width="640">
											  <tbody>
												  <tr>
													  <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 15px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
														  <table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
															  <tr>
																  <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
																	  <div class="alignment" align="center" style="line-height:10px"><img class="fullWidth" src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/4186/blue-bottom.png" style="display: block; height: auto; border: 0; max-width: 640px; width: 100%;" width="640"></div>
																  </td>
															  </tr>
														  </table>
													  </td>
												  </tr>
											  </tbody>
										  </table>
									  </td>
								  </tr>
							  </tbody>
						  </table>
						  <table class="row row-6" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
							  <tbody>
								  <tr>
									  <td>
										  <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000; width: 640px; margin: 0 auto;" width="640">
											  <tbody>
												  <tr>
													  <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-top: 15px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
														  <table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
															  <tr>
																  <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
																	  <div class="alignment" align="center" style="line-height:10px"><img class="fullWidth" src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/4186/white-top.png" style="display: block; height: auto; border: 0; max-width: 640px; width: 100%;" width="640"></div>
																  </td>
															  </tr>
														  </table>
													  </td>
												  </tr>
											  </tbody>
										  </table>
									  </td>
								  </tr>
							  </tbody>
						  </table>
						  <table class="row row-7" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
							  <tbody>
								  <tr>
									  <td>
										  <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff; color: #000; width: 640px; margin: 0 auto;" width="640">
											  <tbody>
												  <tr class="reverse">
													  <td class="column column-1 first" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 15px; padding-top: 15px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
														  <div class="border">
															  <div class="spacer_block block-1" style="height:75px;line-height:75px;font-size:1px;">&#8202;</div>
															  <table class="heading_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
																  <tr>
																	  <td class="pad" style="text-align:center;width:100%;">
																		  <h3 style="margin: 0; color: #1453a3; direction: ltr; font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 24px; font-weight: normal; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;"><strong>Una herramienta, múltiples beneficios.&nbsp;</strong></h3>
																	  </td>
																  </tr>
															  </table>
															  <table class="paragraph_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
																  <tr>
																	  <td class="pad" style="padding-left:20px;padding-right:20px;padding-top:20px;">
																		  <div style="color:#1453a3;font-family:Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;font-size:18px;line-height:150%;text-align:center;mso-line-height-alt:27px;">
																			  <p style="margin: 0; word-break: break-word;"><span><strong>Registra, planifica y consulta el historial alimentario de tus pacientes en un solo lugar, ¡facilitando tu labor como pediatra!</strong></span></p>
																		  </div>
																	  </td>
																  </tr>
															  </table>
															  <table class="paragraph_block block-4" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
																  <tr>
																	  <td class="pad" style="padding-bottom:20px;padding-left:20px;padding-right:20px;">
																		  <div style="color:#1453a3;font-family:Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;font-size:14px;line-height:150%;text-align:center;mso-line-height-alt:21px;">
																			  <p style="margin: 0; word-break: break-word;">&nbsp;</p>
																		  </div>
																	  </td>
																  </tr>
															  </table>
															  <div class="spacer_block block-5" style="height:40px;line-height:40px;font-size:1px;">&#8202;</div>
														  </div>
													  </td>
													  <td class="column column-2 last" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 15px; padding-top: 15px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
														  <div class="border">
															  <table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
																  <tr>
																	  <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
																		  <div class="alignment" align="center" style="line-height:10px"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/4186/science.png" style="display: block; height: auto; border: 0; max-width: 208px; width: 100%;" width="208" alt="Science" title="Science"></div>
																	  </td>
																  </tr>
															  </table>
														  </div>
													  </td>
												  </tr>
											  </tbody>
										  </table>
									  </td>
								  </tr>
							  </tbody>
						  </table>
						  <table class="row row-8" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
							  <tbody>
								  <tr>
									  <td>
										  <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #1453a3; color: #000; width: 640px; margin: 0 auto;" width="640">
											  <tbody>
												  <tr>
													  <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 20px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
														  <table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
															  <tr>
																  <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
																	  <div class="alignment" align="center" style="line-height:10px"><img class="fullWidth" src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/4186/white-bottom.png" style="display: block; height: auto; border: 0; max-width: 640px; width: 100%;" width="640"></div>
																  </td>
															  </tr>
														  </table>
													  </td>
												  </tr>
											  </tbody>
										  </table>
									  </td>
								  </tr>
							  </tbody>
						  </table>
						  <table class="row row-9" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
							  <tbody>
								  <tr>
									  <td>
										  <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000; width: 640px; margin: 0 auto;" width="640">
											  <tbody>
												  <tr>
													  <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
														  <table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
															  <tr>
																  <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
																	  <div class="alignment" align="center" style="line-height:10px"><img class="fullWidth" src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/4186/blue-top.png" style="display: block; height: auto; border: 0; max-width: 640px; width: 100%;" width="640"></div>
																  </td>
															  </tr>
														  </table>
													  </td>
												  </tr>
											  </tbody>
										  </table>
									  </td>
								  </tr>
							  </tbody>
						  </table>
						  <table class="row row-10" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
							  <tbody>
								  <tr>
									  <td>
										  <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #1cb0f6; color: #000; width: 640px; margin: 0 auto;" width="640">
											  <tbody>
												  <tr>
													  <td class="column column-1" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 15px; padding-top: 15px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
														  <table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
															  <tr>
																  <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
																	  <div class="alignment" align="center" style="line-height:10px"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/4186/art.png" style="display: block; height: auto; border: 0; max-width: 208px; width: 100%;" width="208" alt="Art" title="Art"></div>
																  </td>
															  </tr>
														  </table>
													  </td>
													  <td class="column column-2" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 15px; padding-top: 15px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
														  <div class="spacer_block block-1" style="height:65px;line-height:65px;font-size:1px;">&#8202;</div>
														  <table class="heading_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
															  <tr>
																  <td class="pad" style="text-align:center;width:100%;">
																	  <h3 style="margin: 0; color: #ffffff; direction: ltr; font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 24px; font-weight: normal; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;"><strong>De la cuna a la cuchara:</strong></h3>
																  </td>
															  </tr>
														  </table>
														  <table class="paragraph_block block-3" width="100%" border="0" cellpadding="20" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
															  <tr>
																  <td class="pad">
																	  <div style="color:#ffffff;font-family:Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;font-size:18px;line-height:150%;text-align:center;mso-line-height-alt:27px;">
																		  <p style="margin: 0; word-break: break-word;"><span><strong>Crea planes alimentarios personalizados, registra incidencias y garantiza una introducción segura a nuevos alimentos con nuestra plataforma para pediatras.</strong></span></p>
																	  </div>
																  </td>
															  </tr>
														  </table>
														  <div class="spacer_block block-4" style="height:40px;line-height:40px;font-size:1px;">&#8202;</div>
													  </td>
												  </tr>
											  </tbody>
										  </table>
									  </td>
								  </tr>
							  </tbody>
						  </table>
						  <table class="row row-11" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
							  <tbody>
								  <tr>
									  <td>
										  <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000; width: 640px; margin: 0 auto;" width="640">
											  <tbody>
												  <tr>
													  <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 15px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
														  <table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
															  <tr>
																  <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
																	  <div class="alignment" align="center" style="line-height:10px"><img class="fullWidth" src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/4186/blue-bottom.png" style="display: block; height: auto; border: 0; max-width: 640px; width: 100%;" width="640"></div>
																  </td>
															  </tr>
														  </table>
													  </td>
												  </tr>
											  </tbody>
										  </table>
									  </td>
								  </tr>
							  </tbody>
						  </table>
						  <table class="row row-12" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
							  <tbody>
								  <tr>
									  <td>
										  <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000; width: 640px; margin: 0 auto;" width="640">
											  <tbody>
												  <tr>
													  <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-top: 15px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
														  <table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
															  <tr>
																  <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
																	  <div class="alignment" align="center" style="line-height:10px"><img class="fullWidth" src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/4186/white-top.png" style="display: block; height: auto; border: 0; max-width: 640px; width: 100%;" width="640"></div>
																  </td>
															  </tr>
														  </table>
													  </td>
												  </tr>
											  </tbody>
										  </table>
									  </td>
								  </tr>
							  </tbody>
						  </table>
						  <table class="row row-13" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
							  <tbody>
								  <tr>
									  <td>
										  <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff; color: #000; width: 640px; margin: 0 auto;" width="640">
											  <tbody>
												  <tr>
													  <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
														  <table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
															  <tr>
																  <td class="pad" style="padding-bottom:20px;padding-left:10px;padding-right:10px;padding-top:20px;width:100%;">
																	  <div class="alignment" align="center" style="line-height:10px"><img class="fullWidth" src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/4186/read.png" style="display: block; height: auto; border: 0; max-width: 384px; width: 100%;" width="384" alt="Reading" title="Reading"></div>
																  </td>
															  </tr>
														  </table>
														  <table class="heading_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
															  <tr>
																  <td class="pad" style="padding-top:15px;text-align:center;width:100%;">
																	  <h3 style="margin: 0; color: #1453a3; direction: ltr; font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 20px; font-weight: normal; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;"><strong>Tu herramienta de cuidado pediátrico en la palma de tu mano</strong></h3>
																  </td>
															  </tr>
														  </table>
														  <table class="paragraph_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
															  <tr>
																  <td class="pad" style="padding-bottom:20px;padding-left:20px;padding-right:20px;padding-top:10px;">
																	  <div style="color:#1453a3;font-family:Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;font-size:18px;line-height:150%;text-align:center;mso-line-height-alt:27px;">
																		  <p style="margin: 0; word-break: break-word;">&nbsp;Registra, planifica y sigue el desarrollo de tus pequeños pacientes.</p>
																	  </div>
																  </td>
															  </tr>
														  </table>
													  </td>
												  </tr>
											  </tbody>
										  </table>
									  </td>
								  </tr>
							  </tbody>
						  </table>
						  <table class="row row-14" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
							  <tbody>
								  <tr>
									  <td>
										  <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #1453a3; color: #000; width: 640px; margin: 0 auto;" width="640">
											  <tbody>
												  <tr>
													  <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 20px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
														  <table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
															  <tr>
																  <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
																	  <div class="alignment" align="center" style="line-height:10px"><img class="fullWidth" src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/4186/white-bottom.png" style="display: block; height: auto; border: 0; max-width: 640px; width: 100%;" width="640"></div>
																  </td>
															  </tr>
														  </table>
													  </td>
												  </tr>
											  </tbody>
										  </table>
									  </td>
								  </tr>
							  </tbody>
						  </table>
						  <table class="row row-15" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
							  <tbody>
								  <tr>
									  <td>
										  <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000; width: 640px; margin: 0 auto;" width="640">
											  <tbody>
												  <tr>
													  <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
														  <table class="heading_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
															  <tr>
																  <td class="pad" style="padding-bottom:5px;padding-left:5px;padding-right:5px;padding-top:15px;text-align:center;width:100%;">
																	  <h2 style="margin: 0; color: #ffffff; direction: ltr; font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 23px; font-weight: normal; letter-spacing: 1px; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;"><strong>HealthHub</strong></h2>
																  </td>
															  </tr>
														  </table>
														  <table class="button_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
															  <tr>
																  <td class="pad" style="padding-bottom:30px;padding-left:10px;padding-right:10px;padding-top:30px;text-align:center;">
																	  <div class="alignment" align="center"><!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" style="height:42px;width:469px;v-text-anchor:middle;" arcsize="72%" strokeweight="1.5pt" strokecolor="#FFFFFF" fill="false"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#ffffff; font-family:Arial, sans-serif; font-size:16px"><![endif]--><a target="_blank" style="text-decoration:none;display:block;color:#ffffff;background-color:transparent;border-radius:30px;width:75%;border-top:2px solid #FFFFFF;font-weight:undefined;border-right:2px solid #FFFFFF;border-bottom:2px solid #FFFFFF;border-left:2px solid #FFFFFF;padding-top:5px;padding-bottom:5px;font-family:Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;font-size:16px;text-align:center;mso-border-alt:none;word-break:keep-all;"><span style="padding-left:20px;padding-right:20px;font-size:16px;display:inline-block;letter-spacing:normal;"><span style="word-break:break-word;"><strong><span style="line-height: 32px;" data-mce-style>Su username es: ${logUserName}</span></strong></span></span></a><!--[if mso]></center></v:textbox></v:roundrect><![endif]--></div>
																  </td>
															  </tr>
														  </table>
														  <table class="divider_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
															  <tr>
																  <td class="pad" style="padding-bottom:25px;padding-left:10px;padding-right:10px;padding-top:25px;">
																	  <div class="alignment" align="center">
																		  <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
																			  <tr>
																				  <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px solid #1F90C4;"><span>&#8202;</span></td>
																			  </tr>
																		  </table>
																	  </div>
																  </td>
															  </tr>
														  </table>
													  </td>
												  </tr>
											  </tbody>
										  </table>
									  </td>
								  </tr>
							  </tbody>
						  </table>
						  <table class="row row-16" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
							  <tbody>
								  <tr>
									  <td>
										  <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000; width: 640px; margin: 0 auto;" width="640">
											  <tbody>
												  <tr>
													  <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
														  <table class="paragraph_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
															  <tr>
																  <td class="pad" style="padding-bottom:5px;padding-left:15px;padding-right:15px;padding-top:20px;">
																	  <div style="color:#91c7de;font-family:Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;font-size:19px;letter-spacing:1px;line-height:150%;text-align:center;mso-line-height-alt:28.5px;">
																		  <p style="margin: 0; word-break: break-word;">Tu mejor acompañante en el proceso de lo que mas quieres</p>
																	  </div>
																  </td>
															  </tr>
														  </table>
														  <div class="spacer_block block-2" style="height:40px;line-height:40px;font-size:1px;">&#8202;</div>
													  </td>
												  </tr>
											  </tbody>
										  </table>
									  </td>
								  </tr>
							  </tbody>
						  </table>
						  <table class="row row-17" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff;">
							  <tbody>
								  <tr>
									  <td>
										  <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff; color: #000; width: 640px; margin: 0 auto;" width="640">
											  <tbody>
												  <tr>
													  <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
														  <table class="icons_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
															  <tr>
																  <td class="pad" style="vertical-align: middle; color: #1e0e4b; font-family: 'Inter', sans-serif; font-size: 15px; padding-bottom: 5px; padding-top: 5px; text-align: center;">
																	  <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
																		  <tr>
																			  <td class="alignment" style="vertical-align: middle; text-align: center;"><!--[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
																				  <!--[if !vml]><!-->
																				  <table class="icons-inner" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block; margin-right: -4px; padding-left: 0px; padding-right: 0px;" cellpadding="0" cellspacing="0" role="presentation"><!--<![endif]-->
																				  </table>
																			  </td>
																		  </tr>
																	  </table>
																  </td>
															  </tr>
														  </table>
													  </td>
												  </tr>
											  </tbody>
										  </table>
									  </td>
								  </tr>
							  </tbody>
						  </table>
					  </td>
				  </tr>
			  </tbody>
		  </table><!-- End -->
	  </body>
	  
	  </html>`;
    } else if (role === "Acudiente") {
      subject = "¡Bienvenido a HealthHub como Acudiente!";
      htmlContent = `
	  <html>
	  
	  <head>
		  <title></title>
		  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		  <meta name="viewport" content="width=device-width, initial-scale=1.0"><!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]--><!--[if !mso]><!-->
		  <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" type="text/css"><!--<![endif]-->
		  <style>
			  * {
				  box-sizing: border-box;
			  }
	  
			  body {
				  margin: 0;
				  padding: 0;
			  }
	  
			  a[x-apple-data-detectors] {
				  color: inherit !important;
				  text-decoration: inherit !important;
			  }
	  
			  #MessageViewBody a {
				  color: inherit;
				  text-decoration: none;
			  }
	  
			  p {
				  line-height: inherit
			  }
	  
			  .desktop_hide,
			  .desktop_hide table {
				  mso-hide: all;
				  display: none;
				  max-height: 0px;
				  overflow: hidden;
			  }
	  
			  .image_block img+div {
				  display: none;
			  }
	  
			  @media (max-width:660px) {
				  .desktop_hide table.icons-inner {
					  display: inline-block !important;
				  }
	  
				  .icons-inner {
					  text-align: center;
				  }
	  
				  .icons-inner td {
					  margin: 0 auto;
				  }
	  
				  .image_block img.fullWidth {
					  max-width: 100% !important;
				  }
	  
				  .mobile_hide {
					  display: none;
				  }
	  
				  .row-content {
					  width: 100% !important;
				  }
	  
				  .stack .column {
					  width: 100%;
					  display: block;
				  }
	  
				  .mobile_hide {
					  min-height: 0;
					  max-height: 0;
					  max-width: 0;
					  overflow: hidden;
					  font-size: 0px;
				  }
	  
				  .desktop_hide,
				  .desktop_hide table {
					  display: table !important;
					  max-height: none !important;
				  }
	  
				  .reverse {
					  display: table;
					  width: 100%;
				  }
	  
				  .reverse .column.first {
					  display: table-footer-group !important;
				  }
	  
				  .reverse .column.last {
					  display: table-header-group !important;
				  }
	  
				  .row-7 td.column.first .border,
				  .row-7 td.column.last .border {
					  padding: 15px 0;
					  border-top: 0;
					  border-right: 0px;
					  border-bottom: 0;
					  border-left: 0;
				  }
			  }
		  </style>
	  </head>
	  
	  <body style="background-color: #1453a3; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
		  <table class="nl-container" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #1453a3;">
			  <tbody>
				  <tr>
					  <td>
						  <table class="row row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
							  <tbody>
								  <tr>
									  <td>
										  <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-image: url('https://d1oco4z2z1fhwp.cloudfront.net/templates/default/4186/gradient-back-to-school.png'); background-position: center top; background-repeat: repeat; color: #000; width: 640px; margin: 0 auto;" width="640">
											  <tbody>
												  <tr>
													  <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
														  <table class="heading_block block-1" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
															  <tr>
																  <td class="pad">
																	  <h1 style="margin: 0; color: #7747FF; direction: ltr; font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 38px; font-weight: 700; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;"><span style="color: #000000;"><strong><span class="tinyMce-placeholder">HealthHub</span></strong></span></h1>
																  </td>
															  </tr>
														  </table>
														  <table class="heading_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
															  <tr>
																  <td class="pad" style="padding-left:20px;padding-right:20px;padding-top:5px;text-align:center;width:100%;">
																	  <h1 style="margin: 0; color: #ffffff; direction: ltr; font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 40px; font-weight: 700; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;"><span class="tinyMce-placeholder">Bienvenido Acudiente</span></h1>
																  </td>
															  </tr>
														  </table>
														  <table class="heading_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
															  <tr>
																  <td class="pad" style="padding-bottom:10px;padding-left:20px;padding-right:20px;padding-top:20px;text-align:center;width:100%;">
																	  <h2 style="margin: 0; color: #ffffff; direction: ltr; font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 23px; font-weight: normal; letter-spacing: 1px; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;"><span class="tinyMce-placeholder"></span></h2>
																  </td>
															  </tr>
														  </table>
														  <table class="paragraph_block block-4" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
															  <tr>
																  <td class="pad" style="padding-bottom:10px;padding-left:20px;padding-right:20px;padding-top:10px;">
																	  <div style="color:#ffffff;font-family:Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;font-size:18px;line-height:150%;text-align:center;mso-line-height-alt:27px;">
																		  <p style="margin: 0; word-break: break-word;">¡Bienvenido a HealthHub! Estamos encantados de tenerte como parte de nuestra comunidad. Para completar tu registro y desbloquear todas las funciones de nuestra plataforma, necesitamos que sigas estos sencillos pasos.</p>
																	  </div>
																  </td>
															  </tr>
														  </table>
														  <table class="button_block block-5" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
															  <tr>
																  <td class="pad" style="padding-bottom:45px;padding-left:10px;padding-right:10px;padding-top:40px;text-align:center;">
																	  <div class="alignment" align="center"><!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="http://localhost:3000/api/v1/finishAcudienteReg" style="height:46px;width:469px;v-text-anchor:middle;" arcsize="66%" strokeweight="1.5pt" strokecolor="#FFFFFF" fill="false"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#ffffff; font-family:Arial, sans-serif; font-size:16px"><![endif]--><a href="http://localhost:3000/api/v1/finishAcudienteReg" target="_blank" style="text-decoration:none;display:block;color:#ffffff;background-color:transparent;border-radius:30px;width:75%;border-top:2px solid #FFFFFF;font-weight:undefined;border-right:2px solid #FFFFFF;border-bottom:2px solid #FFFFFF;border-left:2px solid #FFFFFF;padding-top:5px;padding-bottom:5px;font-family:Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;font-size:16px;text-align:center;mso-border-alt:none;word-break:keep-all;"><span style="padding-left:20px;padding-right:20px;font-size:16px;display:inline-block;letter-spacing:normal;"><span style="word-break:break-word;"><strong><span style="line-height: 32px;" data-mce-style>Completar registro</span></strong></span></span></a><!--[if mso]></center></v:textbox></v:roundrect><![endif]--></div>
																  </td>
															  </tr>
														  </table>
													  </td>
												  </tr>
											  </tbody>
										  </table>
									  </td>
								  </tr>
							  </tbody>
						  </table>
						  <table class="row row-2" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
							  <tbody>
								  <tr>
									  <td>
										  <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000; width: 640px; margin: 0 auto;" width="640">
											  <tbody>
												  <tr>
													  <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
														  <table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
															  <tr>
																  <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
																	  <div class="alignment" align="center" style="line-height:10px"><img class="fullWidth" src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/4186/blue-top.png" style="display: block; height: auto; border: 0; max-width: 640px; width: 100%;" width="640"></div>
																  </td>
															  </tr>
														  </table>
													  </td>
												  </tr>
											  </tbody>
										  </table>
									  </td>
								  </tr>
							  </tbody>
						  </table>
						  <table class="row row-3" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
							  <tbody>
								  <tr>
									  <td>
										  <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #1cb0f6; color: #000; width: 640px; margin: 0 auto;" width="640">
											  <tbody>
												  <tr>
													  <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
														  <table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
															  <tr>
																  <td class="pad" style="padding-bottom:15px;padding-top:15px;width:100%;padding-right:0px;padding-left:0px;">
																	  <div class="alignment" align="center" style="line-height:10px"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/4186/math.png" style="display: block; height: auto; border: 0; max-width: 256px; width: 100%;" width="256" alt="Math" title="Math"></div>
																  </td>
															  </tr>
														  </table>
													  </td>
												  </tr>
											  </tbody>
										  </table>
									  </td>
								  </tr>
							  </tbody>
						  </table>
						  <table class="row row-4" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
							  <tbody>
								  <tr>
									  <td>
										  <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #1cb0f6; color: #000; width: 640px; margin: 0 auto;" width="640">
											  <tbody>
												  <tr>
													  <td class="column column-1" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 15px; padding-top: 15px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
														  <table class="heading_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
															  <tr>
																  <td class="pad" style="text-align:center;width:100%;">
																	  <h3 style="margin: 0; color: #ffffff; direction: ltr; font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 24px; font-weight: normal; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;"><strong>Nutrición personalizada para cada bebé.&nbsp;</strong></h3>
																  </td>
															  </tr>
														  </table>
														  <table class="paragraph_block block-2" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
															  <tr>
																  <td class="pad">
																	  <div style="color:#ffffff;font-family:Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;font-size:18px;line-height:120%;text-align:center;mso-line-height-alt:21.599999999999998px;">
																		  <p style="margin: 0; word-break: break-word;">Cuide la salud de su bebé desde el principio. Registramos cada alimento, garantizando una dieta segura y saludable.</p>
																	  </div>
																  </td>
															  </tr>
														  </table>
													  </td>
													  <td class="column column-2" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 15px; padding-top: 15px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
														  <table class="heading_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
															  <tr>
																  <td class="pad" style="text-align:center;width:100%;">
																	  <h3 style="margin: 0; color: #ffffff; direction: ltr; font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 24px; font-weight: normal; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;"><strong>Conozca a fondo a su bebé.&nbsp;</strong></h3>
																  </td>
															  </tr>
														  </table>
														  <table class="paragraph_block block-2" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
															  <tr>
																  <td class="pad">
																	  <div style="color:#ffffff;font-family:Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;font-size:18px;line-height:120%;text-align:center;mso-line-height-alt:21.599999999999998px;">
																		  <p style="margin: 0; word-break: break-word;">El pediatra registra datos esenciales, identifica el cuidador principal y crea vínculos fuertes desde el inicio</p>
																	  </div>
																  </td>
															  </tr>
														  </table>
													  </td>
												  </tr>
											  </tbody>
										  </table>
									  </td>
								  </tr>
							  </tbody>
						  </table>
						  <table class="row row-5" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
							  <tbody>
								  <tr>
									  <td>
										  <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000; width: 640px; margin: 0 auto;" width="640">
											  <tbody>
												  <tr>
													  <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 15px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
														  <table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
															  <tr>
																  <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
																	  <div class="alignment" align="center" style="line-height:10px"><img class="fullWidth" src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/4186/blue-bottom.png" style="display: block; height: auto; border: 0; max-width: 640px; width: 100%;" width="640"></div>
																  </td>
															  </tr>
														  </table>
													  </td>
												  </tr>
											  </tbody>
										  </table>
									  </td>
								  </tr>
							  </tbody>
						  </table>
						  <table class="row row-6" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
							  <tbody>
								  <tr>
									  <td>
										  <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000; width: 640px; margin: 0 auto;" width="640">
											  <tbody>
												  <tr>
													  <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-top: 15px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
														  <table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
															  <tr>
																  <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
																	  <div class="alignment" align="center" style="line-height:10px"><img class="fullWidth" src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/4186/white-top.png" style="display: block; height: auto; border: 0; max-width: 640px; width: 100%;" width="640"></div>
																  </td>
															  </tr>
														  </table>
													  </td>
												  </tr>
											  </tbody>
										  </table>
									  </td>
								  </tr>
							  </tbody>
						  </table>
						  <table class="row row-7" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
							  <tbody>
								  <tr>
									  <td>
										  <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff; color: #000; width: 640px; margin: 0 auto;" width="640">
											  <tbody>
												  <tr class="reverse">
													  <td class="column column-1 first" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 15px; padding-top: 15px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
														  <div class="border">
															  <div class="spacer_block block-1" style="height:75px;line-height:75px;font-size:1px;">&#8202;</div>
															  <table class="heading_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
																  <tr>
																	  <td class="pad" style="text-align:center;width:100%;">
																		  <h3 style="margin: 0; color: #1453a3; direction: ltr; font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 24px; font-weight: normal; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;"><strong>Una herramienta, múltiples beneficios.&nbsp;</strong></h3>
																	  </td>
																  </tr>
															  </table>
															  <table class="paragraph_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
																  <tr>
																	  <td class="pad" style="padding-left:20px;padding-right:20px;padding-top:20px;">
																		  <div style="color:#1453a3;font-family:Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;font-size:18px;line-height:150%;text-align:center;mso-line-height-alt:27px;">
																			  <p style="margin: 0; word-break: break-word;">Nutrición personalizada para su bebé. El pediatra crea planes detallados, introduciendo alimentos gradualmente para una alimentación saludable y sin riesgos.</p>
																		  </div>
																	  </td>
																  </tr>
															  </table>
															  <table class="paragraph_block block-4" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
																  <tr>
																	  <td class="pad" style="padding-bottom:20px;padding-left:20px;padding-right:20px;">
																		  <div style="color:#1453a3;font-family:Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;font-size:14px;line-height:150%;text-align:center;mso-line-height-alt:21px;">
																			  <p style="margin: 0; word-break: break-word;">&nbsp;</p>
																		  </div>
																	  </td>
																  </tr>
															  </table>
															  <div class="spacer_block block-5" style="height:40px;line-height:40px;font-size:1px;">&#8202;</div>
														  </div>
													  </td>
													  <td class="column column-2 last" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 15px; padding-top: 15px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
														  <div class="border">
															  <table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
																  <tr>
																	  <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
																		  <div class="alignment" align="center" style="line-height:10px"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/4186/science.png" style="display: block; height: auto; border: 0; max-width: 208px; width: 100%;" width="208" alt="Science" title="Science"></div>
																	  </td>
																  </tr>
															  </table>
														  </div>
													  </td>
												  </tr>
											  </tbody>
										  </table>
									  </td>
								  </tr>
							  </tbody>
						  </table>
						  <table class="row row-8" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
							  <tbody>
								  <tr>
									  <td>
										  <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #1453a3; color: #000; width: 640px; margin: 0 auto;" width="640">
											  <tbody>
												  <tr>
													  <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 20px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
														  <table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
															  <tr>
																  <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
																	  <div class="alignment" align="center" style="line-height:10px"><img class="fullWidth" src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/4186/white-bottom.png" style="display: block; height: auto; border: 0; max-width: 640px; width: 100%;" width="640"></div>
																  </td>
															  </tr>
														  </table>
													  </td>
												  </tr>
											  </tbody>
										  </table>
									  </td>
								  </tr>
							  </tbody>
						  </table>
						  <table class="row row-9" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
							  <tbody>
								  <tr>
									  <td>
										  <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000; width: 640px; margin: 0 auto;" width="640">
											  <tbody>
												  <tr>
													  <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
														  <table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
															  <tr>
																  <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
																	  <div class="alignment" align="center" style="line-height:10px"><img class="fullWidth" src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/4186/blue-top.png" style="display: block; height: auto; border: 0; max-width: 640px; width: 100%;" width="640"></div>
																  </td>
															  </tr>
														  </table>
													  </td>
												  </tr>
											  </tbody>
										  </table>
									  </td>
								  </tr>
							  </tbody>
						  </table>
						  <table class="row row-10" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
							  <tbody>
								  <tr>
									  <td>
										  <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #1cb0f6; color: #000; width: 640px; margin: 0 auto;" width="640">
											  <tbody>
												  <tr>
													  <td class="column column-1" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 15px; padding-top: 15px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
														  <table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
															  <tr>
																  <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
																	  <div class="alignment" align="center" style="line-height:10px"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/4186/art.png" style="display: block; height: auto; border: 0; max-width: 208px; width: 100%;" width="208" alt="Art" title="Art"></div>
																  </td>
															  </tr>
														  </table>
													  </td>
													  <td class="column column-2" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 15px; padding-top: 15px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
														  <div class="spacer_block block-1" style="height:65px;line-height:65px;font-size:1px;">&#8202;</div>
														  <table class="heading_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
															  <tr>
																  <td class="pad" style="text-align:center;width:100%;">
																	  <h3 style="margin: 0; color: #ffffff; direction: ltr; font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 24px; font-weight: normal; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;"><strong>De la cuna a la cuchara:</strong></h3>
																  </td>
															  </tr>
														  </table>
														  <table class="paragraph_block block-3" width="100%" border="0" cellpadding="20" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
															  <tr>
																  <td class="pad">
																	  <div style="color:#ffffff;font-family:Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;font-size:18px;line-height:150%;text-align:center;mso-line-height-alt:27px;">
																		  <p style="margin: 0; word-break: break-word;">Mantenga el control total. El cuidador principal registra incidencias, asegurando una dieta segura y adaptada a las necesidades específicas del bebé.</p>
																	  </div>
																  </td>
															  </tr>
														  </table>
														  <div class="spacer_block block-4" style="height:40px;line-height:40px;font-size:1px;">&#8202;</div>
													  </td>
												  </tr>
											  </tbody>
										  </table>
									  </td>
								  </tr>
							  </tbody>
						  </table>
						  <table class="row row-11" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
							  <tbody>
								  <tr>
									  <td>
										  <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000; width: 640px; margin: 0 auto;" width="640">
											  <tbody>
												  <tr>
													  <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 15px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
														  <table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
															  <tr>
																  <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
																	  <div class="alignment" align="center" style="line-height:10px"><img class="fullWidth" src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/4186/blue-bottom.png" style="display: block; height: auto; border: 0; max-width: 640px; width: 100%;" width="640"></div>
																  </td>
															  </tr>
														  </table>
													  </td>
												  </tr>
											  </tbody>
										  </table>
									  </td>
								  </tr>
							  </tbody>
						  </table>
						  <table class="row row-12" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
							  <tbody>
								  <tr>
									  <td>
										  <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000; width: 640px; margin: 0 auto;" width="640">
											  <tbody>
												  <tr>
													  <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-top: 15px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
														  <table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
															  <tr>
																  <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
																	  <div class="alignment" align="center" style="line-height:10px"><img class="fullWidth" src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/4186/white-top.png" style="display: block; height: auto; border: 0; max-width: 640px; width: 100%;" width="640"></div>
																  </td>
															  </tr>
														  </table>
													  </td>
												  </tr>
											  </tbody>
										  </table>
									  </td>
								  </tr>
							  </tbody>
						  </table>
						  <table class="row row-13" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
							  <tbody>
								  <tr>
									  <td>
										  <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff; color: #000; width: 640px; margin: 0 auto;" width="640">
											  <tbody>
												  <tr>
													  <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
														  <table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
															  <tr>
																  <td class="pad" style="padding-bottom:20px;padding-left:10px;padding-right:10px;padding-top:20px;width:100%;">
																	  <div class="alignment" align="center" style="line-height:10px"><img class="fullWidth" src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/4186/read.png" style="display: block; height: auto; border: 0; max-width: 384px; width: 100%;" width="384" alt="Reading" title="Reading"></div>
																  </td>
															  </tr>
														  </table>
														  <table class="heading_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
															  <tr>
																  <td class="pad" style="padding-top:15px;text-align:center;width:100%;">
																	  <h3 style="margin: 0; color: #1453a3; direction: ltr; font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 20px; font-weight: normal; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;"><strong>Tu herramienta de cuidado en la palma de tu mano</strong></h3>
																  </td>
															  </tr>
														  </table>
														  <table class="paragraph_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
															  <tr>
																  <td class="pad" style="padding-bottom:20px;padding-left:20px;padding-right:20px;padding-top:10px;">
																	  <div style="color:#1453a3;font-family:Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;font-size:18px;line-height:150%;text-align:center;mso-line-height-alt:27px;">
																		  <p style="margin: 0; word-break: break-word;">La información que importa. Acceda al historial alimentario de su bebé: planes iniciales, alimentos consumidos y cualquier incidencia reportada, al alcance de un clic.</p>
																	  </div>
																  </td>
															  </tr>
														  </table>
													  </td>
												  </tr>
											  </tbody>
										  </table>
									  </td>
								  </tr>
							  </tbody>
						  </table>
						  <table class="row row-14" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
							  <tbody>
								  <tr>
									  <td>
										  <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #1453a3; color: #000; width: 640px; margin: 0 auto;" width="640">
											  <tbody>
												  <tr>
													  <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 20px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
														  <table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
															  <tr>
																  <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
																	  <div class="alignment" align="center" style="line-height:10px"><img class="fullWidth" src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/4186/white-bottom.png" style="display: block; height: auto; border: 0; max-width: 640px; width: 100%;" width="640"></div>
																  </td>
															  </tr>
														  </table>
													  </td>
												  </tr>
											  </tbody>
										  </table>
									  </td>
								  </tr>
							  </tbody>
						  </table>
						  <table class="row row-15" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
							  <tbody>
								  <tr>
									  <td>
										  <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000; width: 640px; margin: 0 auto;" width="640">
											  <tbody>
												  <tr>
													  <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
														  <table class="heading_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
															  <tr>
																  <td class="pad" style="padding-bottom:5px;padding-left:5px;padding-right:5px;padding-top:15px;text-align:center;width:100%;">
																	  <h2 style="margin: 0; color: #ffffff; direction: ltr; font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 23px; font-weight: normal; letter-spacing: 1px; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;"><strong>HealthHub</strong></h2>
																  </td>
															  </tr>
														  </table>
														  <table class="button_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
															  <tr>
																  <td class="pad" style="padding-bottom:30px;padding-left:10px;padding-right:10px;padding-top:30px;text-align:center;">
																	  <div class="alignment" align="center"><!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="http://localhost:3000/api/v1/finishAcudienteReg" style="height:46px;width:469px;v-text-anchor:middle;" arcsize="66%" strokeweight="1.5pt" strokecolor="#FFFFFF" fill="false"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#ffffff; font-family:Arial, sans-serif; font-size:16px"><![endif]--><a href="http://localhost:3000/api/v1/finishAcudienteReg" target="_blank" style="text-decoration:none;display:block;color:#ffffff;background-color:transparent;border-radius:30px;width:75%;border-top:2px solid #FFFFFF;font-weight:undefined;border-right:2px solid #FFFFFF;border-bottom:2px solid #FFFFFF;border-left:2px solid #FFFFFF;padding-top:5px;padding-bottom:5px;font-family:Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;font-size:16px;text-align:center;mso-border-alt:none;word-break:keep-all;"><span style="padding-left:20px;padding-right:20px;font-size:16px;display:inline-block;letter-spacing:normal;"><span style="word-break:break-word;"><strong><span style="line-height: 32px;" data-mce-style>Completar registro</span></strong></span></span></a><!--[if mso]></center></v:textbox></v:roundrect><![endif]--></div>
																  </td>
															  </tr>
														  </table>
														  <table class="divider_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
															  <tr>
																  <td class="pad" style="padding-bottom:25px;padding-left:10px;padding-right:10px;padding-top:25px;">
																	  <div class="alignment" align="center">
																		  <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
																			  <tr>
																				  <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px solid #1F90C4;"><span>&#8202;</span></td>
																			  </tr>
																		  </table>
																	  </div>
																  </td>
															  </tr>
														  </table>
													  </td>
												  </tr>
											  </tbody>
										  </table>
									  </td>
								  </tr>
							  </tbody>
						  </table>
						  <table class="row row-16" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
							  <tbody>
								  <tr>
									  <td>
										  <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000; width: 640px; margin: 0 auto;" width="640">
											  <tbody>
												  <tr>
													  <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
														  <table class="paragraph_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
															  <tr>
																  <td class="pad" style="padding-bottom:5px;padding-left:15px;padding-right:15px;padding-top:20px;">
																	  <div style="color:#91c7de;font-family:Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;font-size:19px;letter-spacing:1px;line-height:150%;text-align:center;mso-line-height-alt:28.5px;">
																		  <p style="margin: 0; word-break: break-word;">Tu mejor acompañante en el proceso de lo que mas quieres</p>
																	  </div>
																  </td>
															  </tr>
														  </table>
														  <div class="spacer_block block-2" style="height:40px;line-height:40px;font-size:1px;">&#8202;</div>
													  </td>
												  </tr>
											  </tbody>
										  </table>
									  </td>
								  </tr>
							  </tbody>
						  </table>
						  <table class="row row-17" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff;">
							  <tbody>
								  <tr>
									  <td>
										  <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff; color: #000; width: 640px; margin: 0 auto;" width="640">
											  <tbody>
												  <tr>
													  <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
														  <table class="icons_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
															  <tr>
																  <td class="pad" style="vertical-align: middle; color: #1e0e4b; font-family: 'Inter', sans-serif; font-size: 15px; padding-bottom: 5px; padding-top: 5px; text-align: center;">
																	  <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
																		  <tr>
																			  <td class="alignment" style="vertical-align: middle; text-align: center;"><!--[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
																				  <!--[if !vml]><!-->
																				  <table class="icons-inner" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block; margin-right: -4px; padding-left: 0px; padding-right: 0px;" cellpadding="0" cellspacing="0" role="presentation"><!--<![endif]-->
																				  </table>
																			  </td>
																		  </tr>
																	  </table>
																  </td>
															  </tr>
														  </table>
													  </td>
												  </tr>
											  </tbody>
										  </table>
									  </td>
								  </tr>
							  </tbody>
						  </table>
					  </td>
				  </tr>
			  </tbody>
		  </table><!-- End -->
	  </body>
	  
	  </html>`;
    } else {
      // Busca el usuario por correo electrónico
      db.query(
        "SELECT * FROM Usuario WHERE Correo = ?",
        [toEmail],
        (err, results) => {
          if (err) {
            console.error("Error al consultar la base de datos:", err);
            reject(err);
          } else {
            if (results.length > 0) {
              // Extrae el nombre de usuario
              const usernameSent = results[0].Username; // Asegúrate de ajustar esto según tu tabla de usuarios
              // Puedes utilizar HTML para dar formato al cuerpo del correo
              subject = "¡Bienvenido a HealthHub como Pediatra!";
              htmlContent = `<!DOCTYPE html>
			  <html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
			  
			  <head>
				  <title></title>
				  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
				  <meta name="viewport" content="width=device-width, initial-scale=1.0"><!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]--><!--[if !mso]><!-->
				  <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" type="text/css"><!--<![endif]-->
				  <style>
					  * {
						  box-sizing: border-box;
					  }
			  
					  body {
						  margin: 0;
						  padding: 0;
					  }
			  
					  a[x-apple-data-detectors] {
						  color: inherit !important;
						  text-decoration: inherit !important;
					  }
			  
					  #MessageViewBody a {
						  color: inherit;
						  text-decoration: none;
					  }
			  
					  p {
						  line-height: inherit
					  }
			  
					  .desktop_hide,
					  .desktop_hide table {
						  mso-hide: all;
						  display: none;
						  max-height: 0px;
						  overflow: hidden;
					  }
			  
					  .image_block img+div {
						  display: none;
					  }
			  
					  @media (max-width:660px) {
						  .desktop_hide table.icons-inner {
							  display: inline-block !important;
						  }
			  
						  .icons-inner {
							  text-align: center;
						  }
			  
						  .icons-inner td {
							  margin: 0 auto;
						  }
			  
						  .image_block img.fullWidth {
							  max-width: 100% !important;
						  }
			  
						  .mobile_hide {
							  display: none;
						  }
			  
						  .row-content {
							  width: 100% !important;
						  }
			  
						  .stack .column {
							  width: 100%;
							  display: block;
						  }
			  
						  .mobile_hide {
							  min-height: 0;
							  max-height: 0;
							  max-width: 0;
							  overflow: hidden;
							  font-size: 0px;
						  }
			  
						  .desktop_hide,
						  .desktop_hide table {
							  display: table !important;
							  max-height: none !important;
						  }
			  
						  .reverse {
							  display: table;
							  width: 100%;
						  }
			  
						  .reverse .column.first {
							  display: table-footer-group !important;
						  }
			  
						  .reverse .column.last {
							  display: table-header-group !important;
						  }
			  
						  .row-3 td.column.first .border,
						  .row-3 td.column.last .border {
							  padding: 15px 0;
							  border-top: 0;
							  border-right: 0px;
							  border-bottom: 0;
							  border-left: 0;
						  }
					  }
				  </style>
			  </head>
			  
			  <body style="background-color: #1453a3; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
				  <table class="nl-container" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #1453a3;">
					  <tbody>
						  <tr>
							  <td>
								  <table class="row row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
									  <tbody>
										  <tr>
											  <td>
												  <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-image: url('https://d1oco4z2z1fhwp.cloudfront.net/templates/default/4186/gradient-back-to-school.png'); background-position: center top; background-repeat: repeat; color: #000; width: 640px; margin: 0 auto;" width="640">
													  <tbody>
														  <tr>
															  <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
																  <table class="heading_block block-1" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
																	  <tr>
																		  <td class="pad">
																			  <h1 style="margin: 0; color: #7747FF; direction: ltr; font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 38px; font-weight: 700; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;"><span style="color: #000000;"><strong><span class="tinyMce-placeholder">HealthHub</span></strong></span></h1>
																		  </td>
																	  </tr>
																  </table>
																  <table class="heading_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
																	  <tr>
																		  <td class="pad" style="padding-left:20px;padding-right:20px;padding-top:5px;text-align:center;width:100%;">
																			  <h1 style="margin: 0; color: #00ea0c; direction: ltr; font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 40px; font-weight: 700; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;"><span class="tinyMce-placeholder">Registro finalizado</span></h1>
																		  </td>
																	  </tr>
																  </table>
																  <table class="heading_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
																	  <tr>
																		  <td class="pad" style="padding-bottom:10px;padding-left:20px;padding-right:20px;padding-top:20px;text-align:center;width:100%;">
																			  <h2 style="margin: 0; color: #ffffff; direction: ltr; font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 23px; font-weight: normal; letter-spacing: 1px; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;"><span class="tinyMce-placeholder"></span></h2>
																		  </td>
																	  </tr>
																  </table>
															  </td>
														  </tr>
													  </tbody>
												  </table>
											  </td>
										  </tr>
									  </tbody>
								  </table>
								  <table class="row row-2" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
									  <tbody>
										  <tr>
											  <td>
												  <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000; width: 640px; margin: 0 auto;" width="640">
													  <tbody>
														  <tr>
															  <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-top: 15px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
																  <table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
																	  <tr>
																		  <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
																			  <div class="alignment" align="center" style="line-height:10px"><img class="fullWidth" src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/4186/white-top.png" style="display: block; height: auto; border: 0; max-width: 640px; width: 100%;" width="640"></div>
																		  </td>
																	  </tr>
																  </table>
															  </td>
														  </tr>
													  </tbody>
												  </table>
											  </td>
										  </tr>
									  </tbody>
								  </table>
								  <table class="row row-3" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
									  <tbody>
										  <tr>
											  <td>
												  <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff; color: #000; width: 640px; margin: 0 auto;" width="640">
													  <tbody>
														  <tr class="reverse">
															  <td class="column column-1 first" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 15px; padding-top: 15px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
																  <div class="border">
																	  <div class="spacer_block block-1" style="height:75px;line-height:75px;font-size:1px;">&#8202;</div>
																	  <table class="heading_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
																		  <tr>
																			  <td class="pad" style="text-align:center;width:100%;">
																				  <h3 style="margin: 0; color: #1453a3; direction: ltr; font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 24px; font-weight: normal; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;"><strong>Tu username es</strong></h3>
																			  </td>
																		  </tr>
																	  </table>
																	  <table class="paragraph_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
																		  <tr>
																			  <td class="pad" style="padding-left:20px;padding-right:20px;padding-top:20px;">
																				  <div style="color:#1453a3;font-family:Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;font-size:18px;line-height:150%;text-align:center;mso-line-height-alt:27px;">
																					  <p style="margin: 0;">${usernameSent}</p>
																				  </div>
																			  </td>
																		  </tr>
																	  </table>
																	  <table class="paragraph_block block-4" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
																		  <tr>
																			  <td class="pad" style="padding-bottom:20px;padding-left:20px;padding-right:20px;">
																				  <div style="color:#1453a3;font-family:Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;font-size:14px;line-height:150%;text-align:center;mso-line-height-alt:21px;">&nbsp;</div>
																			  </td>
																		  </tr>
																	  </table>
																	  <div class="spacer_block block-5" style="height:40px;line-height:40px;font-size:1px;">&#8202;</div>
																  </div>
															  </td>
															  <td class="column column-2 last" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 15px; padding-top: 15px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
																  <div class="border">
																	  <table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
																		  <tr>
																			  <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
																				  <div class="alignment" align="center" style="line-height:10px"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/4186/science.png" style="display: block; height: auto; border: 0; max-width: 208px; width: 100%;" width="208" alt="Science" title="Science"></div>
																			  </td>
																		  </tr>
																	  </table>
																  </div>
															  </td>
														  </tr>
													  </tbody>
												  </table>
											  </td>
										  </tr>
									  </tbody>
								  </table>
								  <table class="row row-4" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
									  <tbody>
										  <tr>
											  <td>
												  <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #1453a3; color: #000; width: 640px; margin: 0 auto;" width="640">
													  <tbody>
														  <tr>
															  <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 20px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
																  <table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
																	  <tr>
																		  <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
																			  <div class="alignment" align="center" style="line-height:10px"><img class="fullWidth" src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/4186/white-bottom.png" style="display: block; height: auto; border: 0; max-width: 640px; width: 100%;" width="640"></div>
																		  </td>
																	  </tr>
																  </table>
															  </td>
														  </tr>
													  </tbody>
												  </table>
											  </td>
										  </tr>
									  </tbody>
								  </table>
								  <table class="row row-5" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
									  <tbody>
										  <tr>
											  <td>
												  <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000; width: 640px; margin: 0 auto;" width="640">
													  <tbody>
														  <tr>
															  <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
																  <table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
																	  <tr>
																		  <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
																			  <div class="alignment" align="center" style="line-height:10px"><img class="fullWidth" src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/4186/blue-top.png" style="display: block; height: auto; border: 0; max-width: 640px; width: 100%;" width="640"></div>
																		  </td>
																	  </tr>
																  </table>
															  </td>
														  </tr>
													  </tbody>
												  </table>
											  </td>
										  </tr>
									  </tbody>
								  </table>
								  <table class="row row-6" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
									  <tbody>
										  <tr>
											  <td>
												  <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #1cb0f6; color: #000; width: 640px; margin: 0 auto;" width="640">
													  <tbody>
														  <tr>
															  <td class="column column-1" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 15px; padding-top: 15px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
																  <table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
																	  <tr>
																		  <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
																			  <div class="alignment" align="center" style="line-height:10px"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/4186/art.png" style="display: block; height: auto; border: 0; max-width: 208px; width: 100%;" width="208" alt="Art" title="Art"></div>
																		  </td>
																	  </tr>
																  </table>
															  </td>
															  <td class="column column-2" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 15px; padding-top: 15px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
																  <div class="spacer_block block-1" style="height:65px;line-height:65px;font-size:1px;">&#8202;</div>
																  <table class="heading_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
																	  <tr>
																		  <td class="pad" style="text-align:center;width:100%;">
																			  <h3 style="margin: 0; color: #ffffff; direction: ltr; font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 24px; font-weight: normal; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;"><strong>Tu contraseña</strong></h3>
																		  </td>
																	  </tr>
																  </table>
																  <table class="paragraph_block block-3" width="100%" border="0" cellpadding="20" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
																	  <tr>
																		  <td class="pad">
																			  <div style="color:#ffffff;font-family:Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;font-size:18px;line-height:150%;text-align:center;mso-line-height-alt:27px;">
																				  <p style="margin: 0; word-break: break-word;">¡Hey! ¡Por tu seguridad esta información no la ponemos, tu contraseña es la misma de tu registro!</p>
																			  </div>
																		  </td>
																	  </tr>
																  </table>
																  <div class="spacer_block block-4" style="height:40px;line-height:40px;font-size:1px;">&#8202;</div>
															  </td>
														  </tr>
													  </tbody>
												  </table>
											  </td>
										  </tr>
									  </tbody>
								  </table>
								  <table class="row row-7" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
									  <tbody>
										  <tr>
											  <td>
												  <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000; width: 640px; margin: 0 auto;" width="640">
													  <tbody>
														  <tr>
															  <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 15px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
																  <table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
																	  <tr>
																		  <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
																			  <div class="alignment" align="center" style="line-height:10px"><img class="fullWidth" src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/4186/blue-bottom.png" style="display: block; height: auto; border: 0; max-width: 640px; width: 100%;" width="640"></div>
																		  </td>
																	  </tr>
																  </table>
															  </td>
														  </tr>
													  </tbody>
												  </table>
											  </td>
										  </tr>
									  </tbody>
								  </table>
								  <table class="row row-8" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
									  <tbody>
										  <tr>
											  <td>
												  <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000; width: 640px; margin: 0 auto;" width="640">
													  <tbody>
														  <tr>
															  <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
																  <table class="heading_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
																	  <tr>
																		  <td class="pad" style="padding-bottom:5px;padding-left:5px;padding-right:5px;padding-top:15px;text-align:center;width:100%;">
																			  <h2 style="margin: 0; color: #ffffff; direction: ltr; font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 23px; font-weight: normal; letter-spacing: 1px; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;"><strong>HealthHub</strong></h2>
																		  </td>
																	  </tr>
																  </table>
																  <table class="divider_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
																	  <tr>
																		  <td class="pad" style="padding-bottom:25px;padding-left:10px;padding-right:10px;padding-top:25px;">
																			  <div class="alignment" align="center">
																				  <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
																					  <tr>
																						  <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px solid #1F90C4;"><span>&#8202;</span></td>
																					  </tr>
																				  </table>
																			  </div>
																		  </td>
																	  </tr>
																  </table>
															  </td>
														  </tr>
													  </tbody>
												  </table>
											  </td>
										  </tr>
									  </tbody>
								  </table>
								  <table class="row row-9" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
									  <tbody>
										  <tr>
											  <td>
												  <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000; width: 640px; margin: 0 auto;" width="640">
													  <tbody>
														  <tr>
															  <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
																  <table class="paragraph_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
																	  <tr>
																		  <td class="pad" style="padding-bottom:5px;padding-left:15px;padding-right:15px;padding-top:20px;">
																			  <div style="color:#91c7de;font-family:Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;font-size:19px;letter-spacing:1px;line-height:150%;text-align:center;mso-line-height-alt:28.5px;">
																				  <p style="margin: 0; word-break: break-word;">Tu mejor acompañante en el proceso de lo que mas quieres</p>
																			  </div>
																		  </td>
																	  </tr>
																  </table>
																  <div class="spacer_block block-2" style="height:40px;line-height:40px;font-size:1px;">&#8202;</div>
															  </td>
														  </tr>
													  </tbody>
												  </table>
											  </td>
										  </tr>
									  </tbody>
								  </table>
								  <table class="row row-10" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff;">
									  <tbody>
										  <tr>
											  <td>
												  <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff; color: #000; width: 640px; margin: 0 auto;" width="640">
													  <tbody>
														  <tr>
															  <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
																  <table class="icons_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
																	  <tr>
																		  <td class="pad" style="vertical-align: middle; color: #1e0e4b; font-family: 'Inter', sans-serif; font-size: 15px; padding-bottom: 5px; padding-top: 5px; text-align: center;">
																			  <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
																				  <tr>
																					  <td class="alignment" style="vertical-align: middle; text-align: center;"><!--[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
																						  <!--[if !vml]><!-->
																						  <table class="icons-inner" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block; margin-right: -4px; padding-left: 0px; padding-right: 0px;" cellpadding="0" cellspacing="0" role="presentation"><!--<![endif]-->
																						  </table>
																					  </td>
																				  </tr>
																			  </table>
																		  </td>
																	  </tr>
																  </table>
															  </td>
														  </tr>
													  </tbody>
												  </table>
											  </td>
										  </tr>
									  </tbody>
								  </table>
							  </td>
						  </tr>
					  </tbody>
				  </table><!-- End -->
			  </body>
			  
			  </html>`;

              const mailOptions = {
                from: "serviceshealthhub@gmail.com",
                to: toEmail,
                subject: subject,
                html: htmlContent,
              };

              transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                  console.log(error);
                } else {
                  console.log("Correo electrónico enviado: " + info.response);
                }
              });
            }
          }
        }
      );

      return;
    }

    // Puedes utilizar HTML para dar formato al cuerpo del correo
    const mailOptions = {
      from: "serviceshealthhub@gmail.com",
      to: toEmail,
      subject: subject,
      html: htmlContent,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Correo electrónico enviado: " + info.response);
      }
    });
    return logUserName;
  });
};

module.exports = { sendEmail, logUserName };
