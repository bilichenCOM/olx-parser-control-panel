// language that will be used when the site is entered
const defaultLocale = 'eng';

var setlocale;

$(document).ready(function() {
    $.i18n().load( {
        'eng': 'assets/languages/eng.json',
        'ukr': 'assets/languages/ukr.json',
        'rus': 'assets/languages/rus.json'
    }).done(function() {
        console.log('locales were loaded successfully');
        $.i18n().locale = defaultLocale;
        $('html').i18n();
        setlocale = defaultLocale;
    });
    
    $('.switch-locale').click(function(e) {
        var locale = $(this).data('locale');
        if (locale === setlocale) {
            return;
        }
        $.i18n().locale = locale;
        $('html').i18n();
        setlocale = locale;
    });
});
