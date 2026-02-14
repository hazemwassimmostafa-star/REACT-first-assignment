import "../css/About.css";

function About() {
  return (
    <div className="about-page">
      <div className="about-container">
        {/* About Header */}
        <div className="about-header">
          <h1 className="about-title">من نحن</h1>
          <p className="about-subtitle">
            رحلتنا في عالم التصوير الفوتوغرافي
          </p>
        </div>

        {/* About Content */}
        <div className="about-content">
          <div className="about-section">
            <div className="section-icon">📸</div>
            <h2>عدسة - عالم التصوير</h2>
            <p>
              مرحباً بك في عدسة، منصتك المتخصصة في تعليم ومشاركة فن التصوير الفوتوغرافي.
              نحن فريق من المصورين المحترفين والمتحمسين الذين يؤمنون بقوة الصورة في
              حفظ اللحظات وسرد القصص.
            </p>
          </div>

          <div className="about-section">
            <div className="section-icon">🎯</div>
            <h2>رؤيتنا</h2>
            <p>
              نسعى لأن نكون المرجع الأول في العالم العربي لتعليم التصوير الفوتوغرافي،
              من خلال تقديم محتوى عالي الجودة يساعد المصورين المبتدئين والمحترفين
              على تطوير مهاراتهم وإطلاق إبداعهم.
            </p>
          </div>

          <div className="about-section">
            <div className="section-icon">✨</div>
            <h2>ما نقدمه</h2>
            <ul className="features-list">
              <li>مقالات تعليمية شاملة عن تقنيات التصوير</li>
              <li>نصائح احترافية من خبراء التصوير</li>
              <li>مراجعات للمعدات والكاميرات</li>
              <li>دروس عملية خطوة بخطوة</li>
              <li>مصادر إلهام وأفكار إبداعية</li>
            </ul>
          </div>

          <div className="about-section">
            <div className="section-icon">🤝</div>
            <h2>انضم إلى مجتمعنا</h2>
            <p>
              سواء كنت مبتدئاً تلتقط صورك الأولى، أو محترفاً تبحث عن تقنيات متقدمة،
              عدسة هو المكان المناسب لك. تصفح مدوناتنا، تعلم تقنيات جديدة، وشارك
              شغفك بالتصوير مع مجتمع من المصورين المتحمسين.
            </p>
          </div>

          <div className="cta-section">
            <h2>ابدأ رحلتك في التصوير اليوم</h2>
            <div className="cta-buttons">
              <a href="/blogs" className="cta-btn primary">
                تصفح المدونة
              </a>
              <a href="#contact" className="cta-btn secondary">
                تواصل معنا
              </a>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="stats-section">
          <div className="stat-card">
            <div className="stat-number">500+</div>
            <div className="stat-label">مقال</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">10K+</div>
            <div className="stat-label">قارئ</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">50+</div>
            <div className="stat-label">مصور محترف</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">5+</div>
            <div className="stat-label">سنوات خبرة</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
