import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                "translation": {
                    "home": {
                        h1: 'Hi, I\'m Milena!',
                        h2: 'Fullstack Developer',
                        hero: {
                            desc1: "I specialize in frontend development, but I also have applications in my portfolio.",
                            desc2: "My main passion is combining both of these aspects using technologies like Next.JS.",
                        },
                        p: 'Projects?'
                    },
                    "navigation": {
                        "about": "About",
                        "work": "Work",
                        "contact": "Contact"
                    },
                    "about": {
                        introduction: 'Introduction',
                        aboutMe: 'About me',
                        intro1: "I’m currently traveling around the world in a camper van. I am interested in fullstack development so every day I develop my skills on real projects. You can see full code of my all project on github",
                        intro2: "here!",
                        experience: "I have experience in Typescript and Javascript, I know frameworks like React, Next. I collaborate closely with clients to create amazing and useful products. Let's work together to bring your idea to life!"
                    },
                    "contact": {
                        getInTouch: "Get in Touch",
                        title: "Contact Form",
                        name: "Your Name",
                        email: "Your Email",
                        message: "Your Message",
                        send: "Send",
                        sending: "Sending...",
                        alert1: 'Thank you. I will get back to you as soon as possible',
                        alert2: "I'm sorry, Something went wrong"
                    },
                    "experience": {
                        whatIHaveDone: "What I Have Done So Far",
                        title: "Work Experience",
                        occupation: ["Manager, Non Fashion Specialist, Seller", "Fullstack developer"],
                        date: ["July 2015 - April 2021", "Janury 2023 - still"]
                    },
                    "feedbacks": {
                        whatOthersSay: "WHAT OTHERS SAY",
                        title: "Testimonials",
                        testimonials: [
                            "Milena is a committed person and cares about the client's comfort, she is open to" +
                            " suggestions and gives a lot of herself, it is a pleasure to work with her. The website made by her meets my expectations 100%.",
                            "Milena works on my application with dedication, I am confident in her skills. Her ideas are valuable and you can see that she doesn't care only about profit, but really wants to help my business."
                        ],
                        designations: ["Architect IT", "Science liaison"]
                    },
                    "projects": {
                        p: "My Projects",
                        title: "Projects",
                        desc1:
                            "I really like do a lot of different cases because I love to learn new things about our world, many industries, new people and my work. each case of my client is treated individually and I conduct a detailed research."
                        ,
                        desc2:
                            "Below are the projects I have done so far. These include both websites and applications. Each\n" +
                            "                    project is briefly described and accompanied by a link to the hosted project and also directly to\n" +
                            "                    its code on github."
                        ,
                        abouts: [
                            "A page for a couple traveling by camper, containing information about visited countries, photo" +
                            " galleries - slider and gallery with image filtering. There is also an additional sub-page to encourage" +
                            " people to visit the app, which is also about camper life - where there are populate" +
                            " expanses.",
                            "Application for recording expenses by category, country and month. Currently my travel expenses are" +
                            " entered there, I intend to develop the functionality so that it is possible for other users to add" +
                            " their expenses. I did frontend and backend - both code are in my github page.",
                            "The site of a company offering frame houses for sale. The site includes information about the company, video and photos showcasing the client's products, a timeline with events, and a contact form to allow interaction for potential customers.",
                            "Group project carried out to specification and mock-ups provided. Working in scram technology, under" +
                            " the supervision of a global Scrum Master and the client.Features: authentication, csv file support, restful API, database integration, filtering and searching, pagination",
                            "A website made with no code webflow technology. A project describing a company that designs chatbots and performs automation. Fully responsive site with animations to diversify user experience.",
                            "The second variant of the site related to automation and chatbots, the design of the" +
                            " project transferred from figma. Low-code technology. Responsive site- behaving well on both mobile and dektop devices "
                        ]
                    },
                    footer: {
                        h2: "Resources",
                        icons: "Icons Freepik - Flaticon:",
                        bgc: "Image in the background"
                    }
                }
            },
            pl: {
                "translation": {
                    "home": {
                        h1: 'Cześć, Jestem Milena!',
                        h2: 'Fullstack Developer',
                        hero: {
                            desc1: "Specjalizuję się w tworzeniu stron internetowych, ale mam także aplikacje w moim portfolio.",
                            desc2: "Moją główną pasją jest łączenie obu tych aspektów przy użyciu technologii takich jak Next.JS.",
                        },
                        p: 'Projekty?'
                    },
                    "navigation": {
                        "about": "O mnie",
                        "work": "Praca",
                        "contact": "Kontakt"
                    },
                    "about": {
                        introduction: "Wprowadzenie",
                        aboutMe: "O mnie",
                        intro1: "Obecnie podróżuję po świecie kamperem. Interesuję się fullstackowym programowaniem," +
                            " więc codziennie rozwijam moje umiejętności pracując nad rzeczywistymi projektami." +
                            " Możesz zobaczyć cały kod moich projektów na githubie",
                        intro2: "tutaj!",
                        experience: "Posiadam doświadczenie w TypeScript i JavaScript, znam frameworki takie jak" +
                            " React, Next. Współpracuję blisko z klientami, aby tworzyć niesamowite i przydatne" +
                            " produkty. Współracujmy, by wprowadzić Twoje pomysły w życie!"
                    },
                    "contact": {
                        getInTouch: "Skontaktuj się",
                        title: "Formularz kontaktowy",
                        name: "Twoje imię",
                        email: "Twój email",
                        message: "Twoja wiadomość",
                        send: "Wyślij",
                        sending: "Wysyłanie...",
                        alert1: "Dziękuję za kontakt. Odpowiem jak najszybciej",
                        alert2: "Przepraszamy coś poszło nie tak, proszę spróbować później"
                    },
                    "experience": {
                        whatIHaveDone: "Dotychczasowe kwalifikacje",
                        title: "Doświadczenie zawodowe",
                        occupation: ["Kierownik, Specjalista Non Fashion, Sprzedawca", "Fullstack developer"],
                        date: ["Styczeń 2015 - Kwiecień 2021", "Styczeń 2023 - obecnie"]
                    },
                    "feedbacks": {
                        whatOthersSay: "Co mówią inni",
                        title: "Opinie",
                        testimonials: [
                            "Milena jest zaangażowaną osobą i dba o komfort klienta, jest otwarta na sugestie i" +
                            " daje wiele od siebie. Praca z taką osobą to przyjemność. Strona internetowa stworzona" +
                            " przez" +
                            " nią spełnia moje oczekiwania w 100%.",
                            "Milena pracuje nad moją aplikacją z zaangażowaniem, mam pełne zaufanie do jej umiejętności. Jej pomysły są cenne, widać, że zależy jej nie tylko na zysku, ale naprawdę chce pomóc mojej firmie."
                        ],
                        designations: ["Architekt IT", "Łącznik naukowy"]
                    },
                    "projects": {
                        p: "Moje Wykonania",
                        title: "Projekty",
                        desc1: "Uwielbiam zajmować się różnymi projektami, ponieważ kocham uczyć się" +
                            " nowych rzeczy o naszym świecie, wielu branżach, nowych ludziach i mojej pracy. Każdy" +
                            " przypadek mojego klienta traktuję indywidualnie, a także przeprowadzam o nim szczegółowy" +
                            " research.\n",
                        desc2: "Poniżej znajdują się projekty, które dotychczas wykonałam. Obejmują one" +
                            " zarówno strony internetowe,\n" +
                            "jak i aplikacje. Każdy projekt jest krótko opisany i posiada link do hostowanego projektu oraz bezpośredni\n" +
                            "link do jego kodu na GitHubie.",
                        abouts: [
                            "Strona dla pary podróżującej kamperem, zawierająca informacje o odwiedzonych krajach, zdjęcia" +
                            " galerie - slider i galerię z filtrowaniem zdjęć. Z dodatkową podstrona zachęcająca" +
                            " do odwiedzenia aplikacji, która również dotyczy życia w kamperze-gdzie są" +
                            " ewidencjonowane wydatki.",
                            "Aplikacja do rejestrowania wydatków według kategorii, kraju i miesiąca. Obecnie są" +
                            " tam wydatki jednego użytkownika." +
                            "W przyszłości zamierzam rozwinąć funkcjonalność tak, aby inni użytkownicy mogli dodawać" +
                            " swoje wydatki. Wykonałam frontend i backend - oba kody są na mojej stronie github.",
                            "Strona firmy oferującej domy szkieletowe na sprzedaż. Witryna zawiera informacje o firmie, wideo i zdjęcia prezentujące produkty klienta, oś czasu z wydarzeniami oraz formularz kontaktowy umożliwiający interakcję potencjalnym klientom.",
                            "Projekt grupowy wykonany zgodnie ze specyfikacją i dostarczonymi makietami. Praca w technologii scram, pod nadzorem globalnego Scrum Mastera i klienta. Funkcje: uwierzytelnianie, obsługa plików csv, restful API, integracja z bazą danych, filtrowanie i wyszukiwanie, paginacja",
                            "Strona internetowa wykonana w technologii webflow - low code. Projekt opisujący firmę" +
                            " zajmującą się projektowaniem chatbotów i automatyzacją. W pełni responsywna strona z animacjami urozmaicającymi doświadczenie użytkownika.",
                            "Drugi wariant strony internetowej związanej z automatyzacją i chatbotami, design" +
                            " projektu przeniesiony z figmy. Technologia low-code. Strona responsywna- dobrze" +
                            " zachowująca się zarówno na urządzeniach mobilnych jak i dektopowych"
                        ]
                    },
                    footer: {
                        h2: "Zasoby",
                        icons: "Ikony Freepik - Flaticon:",
                        bgc: "Obraz w tle:",
                    }
                },
            },
        },
        lng: 'pl',
        fallbackLng: 'pl',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
