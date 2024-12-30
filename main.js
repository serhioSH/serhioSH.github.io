onload = () =>{
        document.body.classList.remove("container");
};
        const messages = [
            "Te amo", "I love you", "Je t'aime", "Te quiero", "Ich liebe dich", "Ti amo", "Aşkım", "Saranghae", "Te iubesc", "Eu te amo",
            "Volim te", "Ik hou van jou", "Te amu", "Te أحبك", "Te iubesc", "รักคุณ", "Mahal kita", "Jeg elsker dig", "Kocham cię",
            "حبك", "Minä rakastan sinua", "Aishiteru", "Wǒ ài nǐ", "Kimi wo aishiteru", "Ani ohev otach", "Taim i' ngra leat", "Aha iubesc",
            "Ti amu", "Jeg elsker deg", "Te amol", "Yêu em", "Kocham cię", "Ego se agapo", "Yndiheshe", "Mīlu tevi", "Gina o hiraita",
            "Ndiyakuthanda", "J'aime toi", "Lubię cię", "Dīvērs pasunā", "Mahal kita", "Soyekrainevyan", "Jag älskar dig",
            "Ik houd van jou", "Aishiteru", "Mi amas vin", "Ty tě miluji", "Kimi wo ai shiteru", "Apka pyaar karta hoon",
            "Aiskungut", "Njegov sam", "Mahal kita", "Bhekisisa", "Izakuthemba", "Penny", "Vahduk te amore", "Yupkarikish",
            "Rất yêu em", "Mahal kita", "Sarangae", "Ti ame", "Nin aprecio", "Mi avido", "Mahalo", "Agape tis" 
        ];

        function randomizeMessage() {
            const randomIndex = Math.floor(Math.random() * messages.length);
            document.getElementById("message").innerText = messages[randomIndex];
        }

        setInterval(randomizeMessage, 3600000); // Cambia cada hora (3600000 ms)
        randomizeMessage(); // Inicializa el mensaje al cargar la página
