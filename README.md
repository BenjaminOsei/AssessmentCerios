**Welkom bij het project AssessmentCerios!**

Dit werk omvat het vanaf scratch opzetten/gebruikmaken van een raamwerk waarbinnen er testen geschreven kunnen worden en geschreven zijn met Cypress. Het omvat het neerzetten van een basis, wat zich leent voor verdere uitbreiding.
De focus is dan in deze dan ook gelegd op het navigeren naar een zelf gekozen pagina (Academy) via de footer sectie van de landingspagina van de Cerios website en vervolgens assertions uitvoeren op inhoud van de Academy pagina.
Het idee achter de opzet is de implementatie van het POM (Page Object Model), zodat het geheel onderhoudbaar en in die zin dus modulair opgezet is.

    **Voordelen inzet POM als design pattern:**
      - Herbruikbaarheid: Pagina-objecten kunnen worden hergebruikt in meerdere tests, wat de hoeveelheid duplicatie van code 
      vermindert.

      - Onderhoudbaarheid: Als de gebruikersinterface verandert, hoeft alleen het betreffende pagina-object te worden 
      bijgewerkt, niet alle tests die deze pagina gebruiken.

      - Leesbaarheid: Tests worden leesbaarder en begrijpelijker omdat ze gebruik maken van methoden die de acties op de pagina
      beschrijven. Hierin heb ik een stukje verfijning toegebracht middels de additionele custom commands

      - Scheiding van zorgen: Het scheidt de testlogica (laatJeInspireren.cy.js spec bestand) van de implementatiedetails 
      (page object bestanden en custom commands) van de gebruikersinterface, wat leidt tot een schonere en meer georganiseerde 
      codebasis.

      - Betere foutopsporing: Omdat de logica en de UI-elementen gescheiden zijn, is het gemakkelijker om fouten te identificeren
      en op te lossen.


**Uitdagingen tijdens het implementeren**
Het met Cypress geïmplementeerd krijgen van het adequaat kunnen verifiëren van een stuk tekst die de zogenaamde non-breaking space binnen de html van één van de pagina's bevat.
Dit is uiteindelijk goed gekomen middels de filter functie, refererend aan de non-breaking space middels de definitie "\u00a0" wat er als het ware dan weer uitgefilterd wordt. 
Hierin is het echter wel benodigd dat Cypress op html niveau leest.

**Opmerkingen:**
De assertions zoals opgenomen in het spec bestand hadden ipv een subset van assertions ook een enkele assertion kunnen zijn, waarbij de resterende assertions respectievelijk in opvolgende it() testen worden opgenomen binnen de spec file.
