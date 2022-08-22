https://www.javascripttutorial.net/javascript-bom/javascript-redirect/

25-28
oscpu	The operating system (OS) and/or CPU on which the browser is running.
window.navigator.oscpu
novecojusi metode. atbalsta tikai firefox. izmantoja, lai noskaidrotu lietotāja operētājsistēmu

permissions	Returns the Permissions object to interact with the Permissions API.
window.navigator.permissions
Atbalsta visi, izņemot IE. Izmanto kopā ar Permissions API, lai pārprasītu vai veiktu citas darbības ar atļaujām.
Piemēram uzreiz parādītu karti, ja ieslēgta lokācijas noteikšana, vai arī uzrādīt to pēc ieslēgšanas.

platform	Returns the system platform on which the browser is running.
window.navigator.platform
Strādā visās platformās. Iegūst informāciju par to, uz kādas operētājsistēmas tiek darbināts pārlūks.
"MacIntel", "Win32", "Linux x86_64"
Var izmantot, lai uzrādītu kādu pogu kombināciju spiest. Win+; Command+;

plugins	Returns an array of installed browser’s plug-ins.
window.navigator.plugins
Novecojusi metorde. Pagaidām izmanto visas platformas līdz noteiktam update. Atgriež info masīvā par iekļautajiem pluginiem.
Var noteikt, vai PDF failus varēs nolasīt pašā pārlūkā.
