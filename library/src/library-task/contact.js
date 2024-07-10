import React from 'react';

const ContactUsPage = () => {
  return (
    <div className="contact-us-page">
      <h2>اتصل بنا</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">الاسم:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">البريد الإلكتروني:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">الرسالة:</label>
          <textarea id="message" name="message" rows="5"></textarea>
        </div>
        <button type="submit" className='btn'>إرسال</button>
      </form>
      <div className="contact-info">
        <h3>معلومات الاتصال:</h3>
        <p><strong>البريد الإلكتروني:</strong> info@booklibrary.com</p>
        <p><strong>رقم الهاتف:</strong> +1234567890</p>
      </div>
    </div>
  );
}

export default ContactUsPage;
