﻿// <copyright file=EmailClient.cs company=Justin Spradlin>
//      Copyright (c) 2011 Justin Spradlin.  ALL RIGHTS RESERVED
// </copyright>
// <product></product>
// <author>jspradlin</author>
// <created>Friday, April 29, 2011</created>
// <lastedit>Friday, April 29, 2011</lastedit>

using System.Net;

namespace MyTasks.Infrastructure.Mail
{
    using System;
    using System.Net.Mail;
    using System.Text;

    public class EmailClient:IEmailClient
    {
        #region Methods

        public SendEmailResult SendEmail(MailMessage message)
        {
            message.BodyEncoding = Encoding.UTF8;
            message.IsBodyHtml = true;
            var mailClient = new SmtpClient();
            var log = new SendEmailResult() { Message = message };
            try
            {

                mailClient.Send(message);
            }
            catch (Exception ex)
            {
                log.Exception = ex;
            }

            return log;
        }

        #endregion Methods
    }
}