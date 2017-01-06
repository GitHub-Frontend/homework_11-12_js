$(function() {

    var html = $('#profile').html();
    var profile = [
       {
          name:"Халипский Денис Сергеевич",
          src: "img/avatar.jpg",
          work: "Более 13 лет работаю в юридической сфере. Последние 6 лет предоставляю юридические услуги на аутсорсинг.",
          lerning: [
              {
              title: "Хочу учить front-end, потому что это:",
              content: [
                  {title: "Хочу получить новые знания для реализации в IT направлении!"},
                  {title: "Хочу создавать работающий продукт!"},
                  {title: "Хочу быть частью дружной IT команды!"},
              ],
              }
          ],
          contact: "Мой контактный телефон:",
          phone:"+380674542426",
          fb:"Мой профиль facebook:",
          account: "https://facebook.com/khalipskiy.d",
          myfeedback: "Мой фидбэк:",
          feedback: "Надеюсь курсы GOIT помогут мне открыть для себя Frontend. Буду рад отзывам, предложениям и комментариям!",
       },
    ];
    var content = tmpl(html, {
    		data: profile
    });

        $('body').append(content);
});
