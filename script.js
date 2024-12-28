const banks = [
    { 'samaCode': '55', 'name': 'Banque Saudi Fransi', 'nameEn': 'Banque Saudi Fransi', 'nameAr': 'البنك السعودي الفرنسي' },
    { 'samaCode': '80', 'name': 'Alrajhi Bank', 'nameEn': 'Alrajhi Bank', 'nameAr': 'بنك الراجحي' },
    { 'samaCode': '10', 'name': 'National Commercial Bank', 'nameEn': 'National Commercial Bank', 'nameAr': 'البنك الأهلي التجاري' },
    { 'samaCode': '45', 'name': 'Saudi British Bank', 'nameEn': 'SABB', 'nameAr': 'ساب' },
    { 'samaCode': '20', 'name': 'Riyadh Bank', 'nameEn': 'Riyadh Bank', 'nameAr': 'بنك الرياض' },
    { 'samaCode': '40', 'name': 'Saudi American Bank', 'nameEn': 'SAMBA', 'nameAr': 'سامبا' },
    { 'samaCode': '05', 'name': 'Alinma Bank', 'nameEn': 'Alinma Bank', 'nameAr': 'بنك الإنماء' },
    { 'samaCode': '50', 'name': 'Alawwal Bank', 'nameEn': 'AlAwwal Bank', 'nameAr': 'البنك الأول' },
    { 'samaCode': '60', 'name': 'Bank AlJazira', 'nameEn': 'Bank AlJazira', 'nameAr': 'بنك الجزيرة' },
    { 'samaCode': '65', 'name': 'Saudi Investment Bank', 'nameEn': 'Saudi Investment Bank', 'nameAr': 'البنك السعودي للاستثمار' },
    { 'samaCode': '15', 'name': 'Bank AlBilad', 'nameEn': 'Bank AlBilad', 'nameAr': 'بنك البلاد' },
    { 'samaCode': '30', 'name': 'Arab National Bank', 'nameEn': 'Arab National Bank', 'nameAr': 'البنك العربي الوطني' },
    { 'samaCode': '90', 'name': 'GULF Bank', 'nameEn': 'Gulf International Bank', 'nameAr': 'بنك الخليج' },
    { 'samaCode': '95', 'name': 'Emirates Bank', 'nameEn': 'Emirates Bank', 'nameAr': 'بنك الإمارات' },
    { 'samaCode': '76', 'name': 'Bank Muscat', 'nameEn': 'Bank Muscat', 'nameAr': 'بنك مسقط' },
    { 'samaCode': '71', 'name': 'National Bank of Bahrain', 'nameEn': 'National Bank of Bahrain', 'nameAr': 'بنك البحرين الوطني' },
    { 'samaCode': '75', 'name': 'National Bank of Kuwait', 'nameEn': 'National Bank of Kuwait', 'nameAr': 'بنك الكويت الوطني' },
    { 'samaCode': '85', 'name': 'BNP Paribas Bank', 'nameEn': 'BNP Paribas Saudi Arabia', 'nameAr': 'بي إن بي باريباس' }
];

function CheckIban(iban) {
    if (!iban) return false;
    iban = iban.replaceAll(' ', '');
    if (iban.length !== 24) return false;
    if (!iban.startsWith("SA")) return false;
    return true;
}

function GetIban() {
    const iban = document.getElementById("iban").value.trim();
    const result = document.getElementById("result");
    const bn = document.getElementById("bank");
    const bankResult = document.getElementById("bank1");

    // تحقق من صحة الآيبان
    if (!CheckIban(iban)) {
        result.innerHTML = "الأيبان غير صحيح";
        bn.innerHTML = "";
        bankResult.innerHTML = "";
        return;
    }

    result.innerHTML = "الأيبان صحيح";
    const samaCode = iban.substring(4, 6);
    const bank = banks.find(e => e.samaCode === samaCode);

    if (bank) {
        bn.innerHTML = "اسم البنك";
        bankResult.innerHTML = bank.nameAr; // عرض اسم البنك بالعربية
    } else {
        bn.innerHTML = "اسم البنك";
        bankResult.innerHTML = "غير معروف"; // رسالة إذا لم يتم العثور على البنك
    }
}

