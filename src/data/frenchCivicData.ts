export const FRENCH_INSTITUTIONS: Record<string, any> = {
  "inst-constitution": {
    title: "Constitution et institutions souveraines",
    summary: "L’architecture constitutionnelle définit le Maroc comme une monarchie constitutionnelle démocratique, parlementaire et sociale conformément à la Constitution de 2011.",
    responsibilities: [
      "Le Roi, Chef de l’État et Amir Al-Mouminine, garantit la continuité de l’État, l’intégrité territoriale et le respect des traités internationaux (art. 42).",
      "Le Roi nomme le Chef du Gouvernement au sein du parti politique arrivé en tête des élections de la Chambre des représentants (art. 47).",
      "Le Conseil des ministres, présidé par le Roi, délibère notamment sur les orientations stratégiques de l’État, les révisions constitutionnelles, les cadres militaires, l’état de siège et les projets de lois organiques et de finances (art. 49)."
    ],
    checks: "La séparation des pouvoirs est consacrée : le pouvoir exécutif est exercé par le Gouvernement, le pouvoir législatif par le Parlement et le pouvoir judiciaire est indépendant sous l’autorité du Conseil supérieur du pouvoir judiciaire.",
    officialBody: "Cabinet Royal et Conseil des ministres"
  },
  "inst-executive": {
    title: "Fonctionnement du Gouvernement",
    summary: "Le pouvoir exécutif exerce l’autorité administrative, propose des lois, adopte des décrets réglementaires et gère les services publics.",
    responsibilities: [
      "Le Chef du Gouvernement exerce le pouvoir réglementaire, contresigne les dahirs lorsque la Constitution le prévoit et coordonne l’action gouvernementale (art. 90).",
      "Le Conseil de gouvernement délibère notamment sur les politiques publiques, les stratégies sectorielles, les projets de loi et les nominations aux emplois supérieurs (art. 92).",
      "Les ministres sont responsables de la mise en œuvre de la politique gouvernementale dans leurs départements respectifs."
    ],
    checks: "Le Gouvernement est politiquement responsable devant la Chambre des représentants. Après sa nomination, le Chef du Gouvernement présente son programme et doit obtenir un vote de confiance (art. 88).",
    officialBody: "Chef du Gouvernement et Conseil de gouvernement"
  },
  "inst-parliament": {
    title: "Parlement et contrôle de l’action publique",
    summary: "Le Parlement bicaméral, composé de la Chambre des représentants et de la Chambre des conseillers, vote les lois et le budget et contrôle l’action du Gouvernement.",
    responsibilities: [
      "La Chambre des représentants (395 députés élus au suffrage universel direct pour cinq ans) vote les lois et les lois de finances.",
      "La Chambre des conseillers (120 membres élus au suffrage indirect) représente notamment les collectivités territoriales, les chambres professionnelles et les organisations syndicales.",
      "Les séances de questions orales et les questions écrites permettent au Parlement d’interroger les membres du Gouvernement (art. 100).",
      "Les commissions d’enquête parlementaires peuvent examiner la gestion des fonds publics ou certaines situations administratives (art. 67)."
    ],
    checks: "La Chambre des représentants peut engager la responsabilité du Gouvernement au moyen d’une motion de censure adoptée à la majorité absolue (art. 105).",
    officialBody: "Parlement du Royaume du Maroc"
  },
  "inst-audit": {
    title: "Cour des comptes et institutions indépendantes",
    summary: "Des institutions constitutionnelles contribuent au contrôle des finances publiques, à l’intégrité, aux droits humains et à l’évaluation socio-économique.",
    responsibilities: [
      "La Cour des comptes (art. 147) est l’institution supérieure indépendante de contrôle des finances publiques ; elle contrôle notamment les comptes des partis et évalue l’efficacité des politiques publiques.",
      "L’Instance nationale de la probité, de la prévention et de la lutte contre la corruption (INPPLC, art. 167) contribue à la prévention et au suivi des risques de corruption.",
      "Le Conseil économique, social et environnemental (CESE, art. 151) rend des avis et publie des études sur les grandes questions économiques, sociales et environnementales.",
      "Le Conseil de la concurrence (art. 166) veille à la concurrence loyale et peut sanctionner certaines pratiques anticoncurrentielles."
    ],
    checks: "Les rapports de contrôle sont transmis aux autorités constitutionnelles compétentes et sont publiés afin de permettre leur examen par le public.",
    officialBody: "Cour des comptes, CESE, INPPLC et Conseil de la concurrence"
  }
};

export const FRENCH_METHODOLOGY: Record<string, any> = {
  "01": {
    title: "Isolation du texte exact de l’engagement",
    question: "Qu’est-ce qui a exactement été promis, quand et par qui ?",
    description: "Chaque audit commence par les textes primaires du programme gouvernemental, des directives officielles ou de la législation adoptée. Nous n’évaluons pas les intentions non formulées, mais les engagements concrets et mesurables.",
    standards: ["Référence à une source officielle obligatoire", "Année de référence et échéance documentées", "Objectif classé comme quantitatif ou procédural"]
  },
  "02": {
    title: "Traçabilité financière et crédits budgétaires",
    question: "Quel a été le coût et comment a-t-il été financé ?",
    description: "Un engagement sans crédits budgétaires reste une intention. Nous rapprochons chaque programme des crédits prévus dans les Lois de finances et les comptes spéciaux du Trésor.",
    standards: ["Distinguer dépenses de fonctionnement et dépenses d’investissement", "Identifier le financement fiscal, l’emprunt et les éventuels financements extérieurs", "Suivre les engagements et crédits de paiement pluriannuels"]
  },
  "03": {
    title: "Mise en œuvre administrative",
    question: "Qu’est-ce qui a réellement été réalisé et livré ?",
    description: "Nous vérifions les textes d’application, les marchés attribués, les équipements ouverts et les contrats signés. Les réalisations administratives ne constituent pas à elles seules des résultats pour les citoyens.",
    standards: ["Vérifier les textes d’application publiés au Bulletin officiel", "Contrôler les étapes d’infrastructure et de prestation de service", "Séparer clairement réalisation administrative et service effectivement fourni"]
  },
  "04": {
    title: "Mesure des résultats pour les citoyens",
    question: "Qu’est-ce qui a changé dans la vie quotidienne des citoyens marocains ?",
    description: "Nous examinons les évolutions observables du bien-être : pouvoir d’achat, santé, emploi des jeunes, qualité des apprentissages et inégalités territoriales.",
    standards: ["Utiliser les enquêtes nationales et sources institutionnelles", "Séparer les annonces des résultats statistiquement vérifiés", "Identifier les écarts entre territoires urbains, périurbains et ruraux"]
  },
  "05": {
    title: "Attribution et facteurs externes",
    question: "Que peut-on raisonnablement attribuer à la politique publique plutôt qu’aux chocs extérieurs ?",
    description: "Les politiques publiques ne s’exercent pas dans le vide. Nous tenons compte des chocs climatiques, des fluctuations internationales des matières premières et des conditions monétaires.",
    standards: ["Séparer les contraintes macroéconomiques des défaillances de mise en œuvre", "Comparer les tendances marocaines à celles d’économies confrontées à des chocs similaires", "Éviter d’attribuer automatiquement les évolutions extérieures à l’action publique nationale"]
  },
  "06": {
    title: "Documentation explicite de l’incertitude",
    question: "Que ne savons-nous pas encore et quelles données manquent ?",
    description: "La crédibilité repose aussi sur la prudence. Lorsque les données sont retardées, que la méthodologie change ou que certains registres ne sont pas ouverts, nous l’indiquons explicitement.",
    standards: ["Documenter les décalages statistiques et les dates des indicateurs", "Signaler les ruptures méthodologiques potentielles", "Appliquer une politique de correction publique et datée"]
  }
};

export const FRENCH_ECONOMIC: Record<string, any> = {
  "eco-gdp-growth": { name: "Taux de croissance du PIB réel", category: "Croissance et production", unit: "Variation annuelle en %", change: "+0,4 % par rapport à l’année précédente", definition: "Variation annuelle du produit intérieur brut aux prix chaînés (année de base 2014), mesurant la valeur ajoutée des secteurs agricole et non agricole.", methodology: "Calculé selon le Système de comptabilité nationale des Nations unies (SCN 2008). La série reflète la vigueur des services et des exportations industrielles, contrebalancée par les contractions agricoles liées à la sécheresse." },
  "eco-unemployment-national": { name: "Taux de chômage national", category: "Emploi et marché du travail", unit: "% de la population active", change: "+0,6 % par rapport à la période précédente", definition: "Part de la population active âgée de 15 ans et plus qui est sans emploi, disponible pour travailler et recherche activement un emploi durant la période de référence.", methodology: "Enquête trimestrielle continue auprès des ménages, couvrant environ 90 000 ménages. Les définitions suivent les normes de l’Organisation internationale du Travail." },
  "eco-unemployment-youth": { name: "Taux de chômage des jeunes (15–24 ans, urbain)", category: "Emploi et marché du travail", unit: "% des jeunes actifs urbains", change: "+2,1 % sur un an", definition: "Part des jeunes urbains de 15 à 24 ans appartenant à la population active et sans emploi. Les étudiants à temps plein ne sont pas inclus sauf s’ils recherchent activement un emploi.", methodology: "Sous-échantillon de l’Enquête nationale sur l’emploi, mettant notamment en évidence les difficultés d’insertion et l’inadéquation entre formation et besoins du marché." },
  "eco-cpi-inflation": { name: "Inflation des prix à la consommation (IPC)", category: "Inflation et pouvoir d’achat", unit: "Variation annuelle en %", change: "−4,8 % par rapport au pic de 2023", definition: "Variation de l’indice des prix à la consommation, fondé sur un panier de biens et services suivi dans les principaux centres urbains.", methodology: "Calcul mensuel avec 2017 comme année de base. L’inflation sous-jacente a ralenti après le resserrement de la politique monétaire de Bank Al-Maghrib." },
  "eco-budget-deficit": { name: "Déficit budgétaire", category: "Finances publiques et dette", unit: "% du PIB", change: "−0,5 % par rapport à 2023", definition: "Écart entre les dépenses publiques et les recettes ordinaires, exprimé en proportion du PIB nominal.", methodology: "Calcul selon le cadre de la Loi organique relative à la loi de finances (LOLF n° 130-13), avec prise en compte des opérations budgétaires pertinentes." },
  "eco-treasury-debt": { name: "Dette du Trésor rapportée au PIB", category: "Finances publiques et dette", unit: "% du PIB", change: "−0,8 % sur deux ans", definition: "Encours de la dette directe de l’État, intérieure et extérieure, rapporté au PIB, hors certaines dettes non garanties des établissements et entreprises publics.", methodology: "La dette intérieure constitue la majeure partie du portefeuille du Trésor et est principalement libellée en dirhams ; la dette extérieure est largement contractée auprès de bailleurs multilatéraux." }
};

export const FRENCH_PROMISES: Record<string, any> = {
  "MPM-001": { area: "Emploi", title: "Créer au moins 1 million d’emplois nets", target: "Créer 1 000 000 d’emplois nets pendant le mandat gouvernemental 2021–2026.", budget: "3,25 milliards MAD (Awrach I et II) + initiatives Forsa", status: "🔴 Objectif non atteint / écart important" },
  "MPM-002": { area: "Femmes et jeunesse", title: "Porter le taux d’activité des femmes au-dessus de 30 %", target: "Dépasser 30 % de participation des femmes au marché du travail d’ici 2026, contre environ 20,9 % en 2021.", budget: "Budgétisation sensible au genre à travers les ministères (estimation : 1,8 milliard MAD)", status: "🔴 Objectif non atteint / évolution défavorable" },
  "MPM-003": { area: "Protection sociale", title: "Généraliser la protection sociale et l’aide directe", target: "Généraliser l’assurance maladie obligatoire (AMO) et les transferts monétaires directs aux ménages vulnérables.", budget: "35 milliards MAD par an prévus dans les Lois de finances 2024 et 2025", status: "🟡 Mise en œuvre significative / transition structurelle" },
  "MPM-004": { area: "Eau et environnement", title: "Accélérer le transfert d’eau et le dessalement", target: "Transfert d’eau entre bassins (Sebou-Bouregreg) et station de dessalement de Casablanca d’une capacité annoncée de 300 millions de m³.", budget: "6 milliards MAD (liaison Sebou-Bouregreg) + 15 milliards MAD (dessalement de Casablanca en PPP)", status: "🟢 Objectif en bonne voie / étape stratégique réalisée" }
};
