import Footer from "./Footer.jsx";

const PrivacyPolicy = () => {
    return (
        <div className="bg-hero-pattern bg-cover bg-center">
            <div className="pt-[20px] px-4 pb-[50px] bg-primary text-dark">
                <h1 className="font-bold text-center p-2">POLITYKA PRYWATNOŚCI</h1>
                <p>
                    Niniejsza Polityka stanowi podstawową informację o celach, sposobach przetwarzania oraz
                    bezpieczeństwie Twoich danych osobowych, jako użytkownika strony: <a className="text-tertiary p-1" href="https://projectsbymilencja.pl">projectsbymilencja.pl</a> (zwanej
                    dalej Stroną). Zapoznając się z Polityką prywatności dowiesz się kto jest administratorem Twoich
                    danych osobowych, jakie dane osobowe są przez Stronę zbierane, w jakich celach są wykorzystywane
                    oraz jak są chronione.
                </p>
                <div>
                    <h2 className="font-bold p-2">§1. Informacje podstawowe.</h2>
                    <p>
                        Administratorem Twoich danych osobowych jest: Milena Pieńkosz zamieszkała w Tomaszowie Lubelskim
                        (22-600), ul. Chrobrego 2.
                        Kontakt z Administratorem jest możliwy za pośrednictwem:
                        poczty e-mail: <a className="text-tertiary"
                                          href="mailto:kontakt@projectsbymilencja.pl"> kontakt@projectsbymilencja.pl </a>
                    </p>
                    <h2 className="font-bold p-2">§2. Zasady przetwarzania danych.</h2>
                    <p>
                        Administrator przetwarza dane osobowe z poszanowaniem następujących zasad:
                        w oparciu o podstawę prawną i zgodnie z prawem (legalizm);
                        rzetelnie i uczciwie (rzetelność);
                        w sposób przejrzysty dla osoby, której dane dotyczą (transparentność);
                        w konkretnych celach i nie „na zapas” (minimalizacja);
                        nie więcej niż potrzeba (adekwatność);
                        z dbałością o prawidłowość danych (prawidłowość);
                        nie dłużej niż potrzeba (czasowość);
                        zapewniając odpowiednie bezpieczeństwo danych (bezpieczeństwo).
                    </p>
                    <h2 className="font-bold p-2">§3. Cele, podstawy prawne i zakres przetwarzania danych.</h2>
                    <p>
                        Twoje dane będą przetwarzane w celach kontaktowych, aby udzielić odpowiedzi na Twoją wiadomość
                        przesłaną nam drogą e-mailową lub za pośrednictwem formularza.
                    </p>
                    <h2 className="font-bold p-2"> §5. Termin przechowywania danych.</h2>
                    <p>
                        Nie jesteśmy w stanie ustalić przez jaki okres przetwarzać będziemy Twoje dane osobowe. Jeśli
                        przekazałeś nam swoje dane w formularzu lub wiadomości e-mail w celach kontaktowych to Twoje
                        dane
                        będziemy przetwarzać do momentu złożenia przez Ciebie żądania usunięcia tych danych lub
                        sprzeciwu
                        wobec przetwarzania, ale również w przypadku, w którym uznamy, że zrealizowaliśmy prawnie
                        uzasadniony interes Administratora.
                    </p>
                    <h2 className="font-bold p-2"> §6. Prawa użytkowników.</h2>
                    <p>
                        W związku z przetwarzaniem Twoich danych przysługują Ci następujące prawa:
                        dostępu do treści swoich danych oraz
                        prawo ich sprostowania, usunięcia, ograniczenia przetwarzania,
                        prawo do przenoszenia danych,
                        prawo wniesienia sprzeciwu,
                        prawo do cofnięcia zgody na ich przetwarzanie w dowolnym momencie i w dowolnej formie, chyba że
                        przetwarzanie Państwa danych odbywa się w celu wykonywania umowy przez Administratora, w celu
                        wywiązania się przez Administratora z obowiązków prawnych względem instytucji państwowych lub w
                        celu
                        realizacji prawnie uzasadnionych interesów Administratora.
                        Masz także prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych (na adres Urzędu
                        Ochrony Danych Osobowych, ul. Stawki 2, 00-193 Warszawa).
                        Więcej informacji w przedmiocie ochrony danych osobowych mogą Państwo otrzymać na stronie
                        internetowej Urzędu Ochrony Danych Osobowych: <a className="text-tertiary p-1"
                                                                         href="https://www.uodo.gov.pl"> www.uodo.gov.pl </a>
                    </p>
                </div>
            </div>
            <Footer/>
        </div>

    );
}

export default PrivacyPolicy;
