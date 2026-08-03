# Site académique — Aoudou Njingouo Mounchingam

Site personnel bilingue (français / anglais) destiné aux candidatures de
**professeur d'université**, **chercheur** et **consultant en méthodes quantitatives**.

Aucune dépendance externe : HTML, CSS et JavaScript natifs. Le site fonctionne
hors ligne et se charge instantanément.

---

## Structure des fichiers

```
index.html    Contenu du site (les deux langues sont dans le HTML → bon référencement)
style.css     Mise en forme, mode clair/sombre, responsive, feuille d'impression
script.js     Bascule FR/EN, thème, menu mobile, filtres de publications
images/
  profile.jpg Photo de profil
assets/
  CV_Aoudou_Njingouo_Mounchingam.pdf   CV téléchargeable depuis le site
```

---

## Mise en ligne sur GitHub Pages

Le dépôt <https://github.com/njingouo/mypage> existe déjà. Pour le remplacer par ce site :

```bash
git clone https://github.com/njingouo/mypage.git && cd mypage
```

Copiez ensuite `index.html`, `style.css`, `script.js`, le dossier `images/` et le
dossier `assets/` dans le dépôt (en écrasant les anciens fichiers), puis :

```bash
git add -A && git commit -m "Nouveau site academique bilingue" && git push
```

Activez enfin GitHub Pages : **Settings → Pages → Source : `main` / `root`**.
Le site sera publié à l'adresse `https://njingouo.github.io/mypage/`.

> Astuce : si vous renommez le dépôt en `njingouo.github.io`, l'adresse devient
> simplement `https://njingouo.github.io/` — plus court et plus professionnel sur un CV.

---

## À compléter

1. **Identifiants de chercheur.** Un bloc commenté à la fin de la section
   « Contact » de `index.html` contient les liens Google Scholar, ORCID,
   LinkedIn et ResearchGate. Remplacez les URL puis retirez les balises
   `<!--` et `-->`. Ces identifiants pèsent lourd dans l'évaluation des dossiers.
2. **Photo de profil.** `images/profile.jpg` est une photo personnelle.
   Une photo professionnelle (buste, fond neutre, tenue formelle) renforcerait
   nettement la crédibilité du site auprès des comités de recrutement.
3. **Mise à jour du CV.** Remplacez `assets/CV_Aoudou_Njingouo_Mounchingam.pdf`
   par la version la plus récente ; le nom du fichier ne doit pas changer.
4. **Date de mise à jour.** Modifiez « Dernière mise à jour » dans le pied de page
   de `index.html` à chaque révision.
5. **Numéro de téléphone.** Il n'apparaît volontairement pas sur le site public
   (risque d'aspiration automatisée). Il reste disponible dans le CV en PDF.

---

## Prévisualiser localement

```bash
python -m http.server 8777
```

Puis ouvrez <http://localhost:8777>.

---

## Ajouter une publication

Copiez un bloc `<li class="pub" data-type="article">` dans `index.html` et
adaptez-le. Les valeurs possibles de `data-type` sont :

| `data-type` | Rubrique                    |
|-------------|-----------------------------|
| `article`   | Article évalué par les pairs |
| `progress`  | Manuscrit en évaluation      |
| `report`    | Rapport de recherche         |

Ajoutez `class="pub pub--flag"` pour mettre en valeur les articles dont vous êtes
premier auteur. Pensez à mettre à jour les compteurs affichés dans les boutons de
filtre et dans le bandeau de chiffres en haut de page.
