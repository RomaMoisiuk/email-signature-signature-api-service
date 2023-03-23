const layouts = {
  first: `
  <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
  <html><head><title>Email Signature</title>
  <meta content="text/html; charset=utf-8" http-equiv="Content-Type">
  </head>
  <body style="font-size: 10pt; font-family: Arial, sans-serif;">
    <table cellspacing="0" cellpadding="0" border="0">
      <tbody>
        <tr>
          <td style="padding-bottom: 18px;">
            <strong>
              <h1 style="color:#00aeef;">{fullName}</h1>
              <span>{title},</span>
              <span>{company}<br></span>
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <hr>
            <span>
              <span style="color: #00aeef;"><strong>Phone</strong></span>
              <span> {phone}</span>
            </span>
            <span>
              <span style="color: #00aeef;"><strong>Email</strong></span>
              <span> {email}</span>
            </span>            
          </td>
        </tr>
        <tr>
          <td>
            <span style="color: #00aeef;"><strong>Address</strong></span>
            <span>{address}</span>
            <hr>
          </td>
        </tr>
      </tbody>
    </table>
  </body>
  </html>  
  `,
  second: `
  <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
  <html><head><title>Email Signature</title>
  <meta content="text/html; charset=utf-8" http-equiv="Content-Type">
  </head>
  <body style="font-size: 10pt; font-family: Arial, sans-serif;">
    <table cellspacing="0" cellpadding="0" border="0">
      <tbody>
        <tr>
          <td style="padding-bottom: 18px;">
            <strong>
              <h1 style="color:#00aeef;">{fullName}</h1>
              <span>{title},<br></span>
              <span>{company}<br></span>
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <span>
              <span style="color: #00aeef;"><strong>Phone</strong></span>
              <span>{phone}<br></span>
            </span>
            <span>
              <span style="color: #00aeef;"><strong>Email</strong></span>
              <span> {email}</span>
            </span>            
          </td>
        </tr>
        <tr>
          <td>
            <span style="color: #00aeef;"><strong>Address</strong></span>
            <span>{address}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </body>
  </html>
  
  `,
};

export { layouts };
