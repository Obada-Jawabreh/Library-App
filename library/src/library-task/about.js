import React from 'react';

const AboutUsPage = () => {
  return (
    <div className="about-us-page">
      <h2>عنا</h2>
      <p>مرحبًا بكم في مكتبة الكتب، المكان الذي يجمع بين القراءة والمعرفة. نحن نسعى لتقديم مجموعة واسعة من الكتب التي تلبي اهتماماتكم وتغذي عقولكم بالمعرفة.</p>
      <section>
        <h3>رؤيتنا</h3>
        <p>نطمح لأن نكون المصدر الأول لكل محبي الكتب والقراءة في الوطن العربي، من خلال توفير مكتبة شاملة تضم أفضل الكتب في مختلف المجالات.</p>
      </section>
      <section>
        <h3>رسالتنا</h3>
        <p>هدفنا هو تعزيز حب القراءة ونشر المعرفة من خلال تقديم كتب متنوعة ومفيدة، بالإضافة إلى خلق مجتمع قراء نشط يمكنه تبادل الآراء والخبرات.</p>
      </section>
      <section>
        <h3>خدماتنا</h3>
        <ul>
          <li>توفير كتب في مختلف المجالات</li>
          <li>نشر مقالات ومراجعات للكتب</li>
          <li>تنظيم فعاليات وندوات ثقافية</li>
          <li>تقديم توصيات قرائية مخصصة</li>
        </ul>
      </section>
    </div>
  );
}

export default AboutUsPage;
