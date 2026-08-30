// بخش «نظرات» با یک Google Form + Google Sheet کار می‌کند (بدون سرور، مثل بخش جاذبه‌ها):
//
// ۱. یک Google Form بسازید (forms.google.com) با این سؤال‌ها:
//    - نام شما (پاسخ کوتاه)
//    - نام جاذبه (پاسخ کوتاه یا چندگزینه‌ای، اختیاری)
//    - امتیاز از ۵ (چندگزینه‌ای: 1 تا 5)
//    - متن نظر (پاراگراف)
// ۲. در تب «Responses» فرم، روی آیکون سبز Google Sheets بزنید تا پاسخ‌ها به‌طور خودکار
//    در یک شیت جدید ذخیره شوند.
// ۳. همان شیت پاسخ‌ها را مثل شیت جاذبه‌ها منتشر کنید:
//    File → Share → Publish to web → CSV → Publish → لینک را کپی کنید.
// ۴. ستون‌های آن شیت را (که Google Form خودش می‌سازد) این‌طور تنظیم کنید که با نام‌های
//    زیر مطابقت داشته باشند (می‌توانید نام ستون‌ها را در ردیف اول شیت ویرایش کنید):
//    name, site, rating, comment, date
// ۵. لینک CSV را در REVIEWS_CSV_URL، و لینک خودِ فرم (برای دکمهٔ «ثبت نظر جدید») را
//    در REVIEW_FORM_URL جای‌گذاری کنید.

const REVIEWS_CSV_URL = "PASTE_YOUR_PUBLISHED_REVIEWS_CSV_LINK_HERE";
const REVIEW_FORM_URL = "PASTE_YOUR_GOOGLE_FORM_LINK_HERE";
