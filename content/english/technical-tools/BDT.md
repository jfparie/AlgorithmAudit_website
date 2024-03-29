---
title: Bias detection tool
subtitle: >
  Algorithm Audit's bias detection tool employs statistics to identify groups
  that may be subject to unfair treatment by AI systems. The tool informs the
  qualitative doctrine of law and ethics which disparities need to be
  scrutinised manually by human experts. Algorithm Audit combines quantitative
  and qualitative methods to make normative decisions about fair AI, also known
  as our <a href="https://github.com/NGO-Algorithm-Audit/Bias_scan"
  target="_blank">joint fairness assessment method (JFAM)</a>.
image: /images/svg-illustrations/illustration_cases.svg
text_field1:
  title: Bias detection tool – What is it?
  icon: fas fa-search
  id: info
  content: >
    This bias detection tool identifies potentially unfairly treated groups of
    similar users by a binary algorithmic classifier. The tool identifies
    clusters of users that face a higher misclassification rate compared to the
    rest of the data set. Clustering is an unsupervised ML method, so no data is
    needed is required on protected attributes of users. The metric by which
    bias is defined can be manually chosen in advance: False Negative Rate
    (FNR), False Positive Rate (FPR), or Accuracy (Acc).


    The tool returns a report which presents the cluster with the highest bias
    and describes this cluster by the features that characterizes it. This is
    quantitatively expressed by the (statistically significant) differences in
    feature means between the identified cluster and the rest of the data. The
    report also visualizes the outcomes.


    Try the tool below ⬇️
text_field2:
  title: Finalist Stanford's AI Audit Challenge 2023
  icon: fas fa-medal
  id: stanford-challenge
  content: "Under the name Joint Fairness Assessment Method (JFAM) our bias scan tool has been selected as a finalist in\_[Stanford's AI Audit Competition 2023](https://hai.stanford.edu/ai-audit-challenge-2023-finalists).\n\n![Stanford University Human-Centered Artificial Intelligence](/images/supported_by/HAI.png)\n"
text_field3:
  title: Hierarchical Bias-Aware Clustering (HBAC) algorithm
  icon: fas fa-code-branch
  id: hbac-algorithm
  content: "The bias detection tool makes use of k-means or k-modes Hierarchical Bias-Aware Clustering (HBAC), as described by Misztal-Radecka and Indurkya in <i>Information Processing and Management</i>\_(2021)\_[\\[link\\]](https://www.sciencedirect.com/science/article/abs/pii/S0306457321000285). An implementation of the HBAC algorithm can be found on\_[Github.](https://github.com/NGO-Algorithm-Audit/AI_Audit_Challenge)\n\n[Download](https://github.com/NGO-Algorithm-Audit/Bias_scan/blob/master/classifiers/BERT_disinformation_classifier/test_pred_BERT.csv)\_an example data set to use the bias scan tool.\n"
text_field4:
  title: Input data
  icon: fas fa-database
  id: input-data
  content: "What input does the bias scan tool need?\nA .csv file of max. 1GB with feature columns, predicted labels by the classifier and ground truth labels. Only the name of 'pred\\_label' and 'truth\\_label' are of importance, not the naming or order of the feature columns. All column values should be numeric and unscaled.\n\n\\- Features:\_unscaled numeric values, e.g.,\_feat\\_1, feat\\_2, ..., feat\\_n;\n\n\\- Predicted label:\_0 or 1;\n\n\\- Truth label:\_0 or 1;\n\n\\- Bias metric:\_False Positive Rate (FPR), False Negative Rate (FNR) or Accuracy.\n\n<div>\n        <p><u>Data snippet</u>:</p>\n        <style type=\"text/css\">\n          .tg  {border-collapse:collapse;border-spacing:0;}\n          .tg td{border-color:grey;border-style:solid;border-width:1px;font-size:14px;\n            overflow:hidden;padding:10px 5px;word-break:normal;}\n          .tg th{border-color:#grey;border-style:solid;border-width:1px;font-size:14px;\n            font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n          .tg .tg-uox0{border-color:#grey;font-weight:bold;text-align:left;vertical-align:top}\n          .tg .tg-uoz0{border-color:#grey;text-align:left;vertical-align:top}\n          </style>\n          <table class=\"tg\">\n          <thead>\n            <tr>\n              <th class=\"tg-uox0\">feat_1</th>\n              <th class=\"tg-uox0\">feat_2</th>\n              <th class=\"tg-uox0\">...</th>\n              <th class=\"tg-uox0\">feat_n</th>\n              <th class=\"tg-uox0\">pred_label</th>\n              <th class=\"tg-uox0\">truth_label</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td class=\"tg-uoz0\">10</td>\n              <td class=\"tg-uoz0\">1</td>\n              <td class=\"tg-uoz0\">...</td>\n              <td class=\"tg-uoz0\">0.1</td>\n              <td class=\"tg-uoz0\">1</td>\n              <td class=\"tg-uoz0\">1</td>\n            </tr>\n            <tr>\n              <td class=\"tg-uoz0\">20</td>\n              <td class=\"tg-uoz0\">2</td>\n              <td class=\"tg-uoz0\">...</td>\n              <td class=\"tg-uoz0\">0.2</td>\n              <td class=\"tg-uoz0\">1</td>\n              <td class=\"tg-uoz0\">0</td>\n            </tr>\n            <tr>\n              <td class=\"tg-uoz0\">30</td>\n              <td class=\"tg-uoz0\">3</td>\n              <td class=\"tg-uoz0\">...</td>\n              <td class=\"tg-uoz0\">0.3</td>\n              <td class=\"tg-uoz0\">0</td>\n              <td class=\"tg-uoz0\">0</td>\n            </tr>\n          </tbody>\n          </table>\n          <br>\n          <p><u>Overview of supported bias metrics</u>:</p>\n          <style type=\"text/css\">\n            .tg  {border-collapse:collapse;border-spacing:0;}\n            .tg td{border-color:black;border-style:solid;border-width:1px;font-size:14px;\n              overflow:hidden;padding:10px 5px;word-break:normal;}\n            .tg th{border-color:black;border-style:solid;border-width:1px;font-size:14px;\n              font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n            .tg .tg-1wig{font-weight:bold;text-align:left;vertical-align:top}\n            .tg .tg-0lax{text-align:left;vertical-align:top}\n          </style>\n          <table class=\"tg\">\n            <thead>\n              <tr>\n                <th class=\"tg-1wig\">Metric</th>\n                <th class=\"tg-1wig\">Description</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td class=\"tg-0lax\">False Positive <br>Rate (FPR)</td>\n                <td class=\"tg-0lax\"><span style=\"font-weight:400;font-style:normal;text-decoration:none\">The bias scan tool finds the cluster for which most true labels are predicted to</span><br><span style=\"font-weight:400;font-style:normal;text-decoration:none\">be false, proportional to all true labels (False Positive Rate).</span></td>\n              </tr>\n              <tr>\n                <td class=\"tg-0lax\"><span style=\"font-weight:400;font-style:normal;text-decoration:none\">False Negative</span><br><span style=\"font-weight:400;font-style:normal;text-decoration:none\">Rate (FN</span>R)</td>\n                <td class=\"tg-0lax\"><span style=\"font-weight:400;font-style:normal;text-decoration:none\">The bias scan tool finds the cluster for which most false labels are predicted to</span><br><span style=\"font-weight:400;font-style:normal;text-decoration:none\">be true, proportional to all false labels (False Negative Rate).</span></td>\n              </tr>\n              <tr>\n                <td class=\"tg-0lax\">Accuracy</td>\n                <td class=\"tg-0lax\"><span style=\"font-weight:400;font-style:normal;text-decoration:none\">Sum of True Positives (TPs) and True Negatives (TNs), </span><br><span style=\"font-weight:400;font-style:normal;text-decoration:none\">proportional to all predictions.</span></td>\n              </tr>\n            </tbody>\n          </table>\n          <div style=\"margin-top:20px;\">\n            <a style=\"color:#005aa7;\" href=\"https://en.wikipedia.org/wiki/Confusion_matrix#Table_of_confusion\" target=\"_blank\">Learn more</a> about bias metrics.\n          </div>\n      </div>\n"
text_field5:
  title: FAQ
  icon: fas fa-question-circle
  id: faq
  content: "##### Why this bias detection tool?\n\n* No data needed on protected attributes of users (unsupervised bias detection);\n* Model-agnostic (AI binary classifiers only);\n* Connecting quantitative tools with qualitative methods to assess fair AI;\n* Developed open-source and not-for-profit.\n\n##### By whom can the bias detection tool be used?\_\n\nThe bias detection tool allows the entire ecosystem involved in auditing AI, e.g., data scientists, journalists, policy makers, public- and private auditors, to use quantitative methods to detect bias in AI systems.\n\n##### What does the tool compute?\_\n\nA statistical method is used to compute which clusters are relatively often misclassified by an AI system. A cluster is a group of data points sharing similar features. The tool returns a report in which identified differences (between feature means) are visualized and statistical significant feature differences are tested (Welch’s two-samples t-test for unequal variances).\n\n##### The tool detects prohibited discrimination in AI?\_\n\nNo. The bias detection tool serves as a starting point to assess potentially unfair AI classifiers with the help of subject-matter expertise. The features of identified clusters are examined on critical links with protected grounds, and whether the measured disparities are legitimate. This is a qualitative assessment for which the context-sensitive legal doctrine provides guidelines, i.e., to assess the legitimacy of the aim pursued and whether the means of achieving that aim are\_appropriate\_and\_necessary.\n\n##### For what type of AI does the tool work?\_\n\nCurrently, only\_binary classification\_algorithms can be reviewed. For instance, prediction of loan approval (yes/no), disinformation detection (true/false) or disease detection (positive/negative).\n\n##### What happens with my data?\n\nYour .csv file is uploaded to a AWS bucket, where it is processed. Once the clustering algorithm is finised the data is immediately deleted.\n\n##### &#xA;In sum\_\n\nQuantitative methods, such as unsupervised bias detection, are helpful to discover potentially unfair treated groups of similar users in AI systems in a scalable manner. Automated identification of cluster disparities in AI models allows human experts to assess observed disparities in a qualitative manner, subject to political, social and environmental traits. This two-pronged approach bridges the gap between the qualitative requirements of law and ethics, and the quantitative nature of AI (see figure). In making normative advice, on identified ethical issues publicly available, over time a repository of 'techno-ethical jurisprudence' emerges; from which data scientists and public authorities can distill best practices to build fairer AI (see our\_case reviews).\_\n"
reports_preview:
  title: Example output bias detection tool
  icon: fas fa-file
  button_text: Case repository
  button_link: /algoprudence
  id: example-reports
  feature_item:
    - name: Normative judgement commission
      image: /images/algoprudence/AA202301/Cover.png
      link: /algoprudence/cases/aa202301_bert-based-disinformation-classifier/
      content: >
        An advice commission believes there is a low risk of
        (higher-dimensional) proxy discrimination by the BERT-based
        disinformation classifier
    - name: FPR clustering results
      image: /images/BDT/Example_report.png
      link: >-
        https://static-files-pdf.s3.amazonaws.com/bias_scan_FPR_test_pred_BERT.pdf
      content: "An example report for the\_[BERT-based disinformation detection (FPR) case study](https://static-files-pdf.s3.amazonaws.com/bias_scan_FPR_test_pred_BERT.pdf)\n"
team:
  title: Bias Detection Tool Team
  icon: fas fa-user-friends
  button_text: Other teams
  id: team
  button_link: /about/teams/
  team_members:
    - image: /images/people/FHolstege.jpeg
      name: Floris Holstege
      bio: |
        PhD-candidate Machine Learning, University of Amsterdam
    - image: /images/people/JPersson.jpeg
      name: Joel Persson PhD
      bio: |
        Research Scientist, Spotify
    - image: /images/people/KPadh.jpeg
      name: Kirtan Padh
      bio: |
        PhD-candidate Causal Inference and Machine Learning, TU München
    - image: /images/people/KProrokovic.jpeg
      name: Krsto Proroković
      bio: |
        PhD-candidate, Swiss AI Lab IDSIA
    - image: /images/people/MJorgensen.jpeg
      name: Mackenzie Jorgensen
      bio: |
        PhD-candidate Computer Science, King’s College London
web_app:
  title: Bias detection tool
  icon: fas fa-cloud
  id: web-app
  content: ''
type: bias-detection-tool
---

{{< container_open title="Bias detection tool – What is it?" icon="fas fa-search" id="info" >}}

This bias detection tool identifies potentially unfairly treated groups of similar users by a binary algorithmic classifier. The tool identifies clusters of users that face a higher misclassification rate compared to the rest of the data set. [Clustering](https://en.wikipedia.org/wiki/Cluster_analysis) is an unsupervised ML method, so no data is needed is required on protected attributes of users, e.g., gender, nationality or ethnicity. The metric by which bias is defined can be manually chosen in advance: False Negative Rate (FNR), False Positive Rate (FPR), or Accuracy (Acc). Because the tool utilizes statistics, it is able detect higher-dimensional form of apparently neutral differentiation, also referred to as higher-dimensional proxy or intersectional discrimination

The tool returns a report which presents the cluster with the highest bias and describes this cluster by the features that characterizes it. This is quantitatively expressed by the (statistically significant) differences in feature means between the identified cluster and the rest of the data. The report also visualizes the outcomes.

Try the tool below ⬇️

{{< container_close >}}

{{< web_app >}}

{{< promo_bar content="Do you appreciate the work of Algorithm Audit? ⭐️ us on" id="promo" >}}

{{< reports_preview >}}

{{< container_open title="Finalist Stanford’s AI Audit Challenge 2023" icon="fas fa-medal" id="finalist" >}}

Under the name Joint Fairness Assessment Method (JFAM) our bias scan tool has been selected as a finalist in [Stanford’s AI Audit Competition 2023](https://hai.stanford.edu/ai-audit-challenge-2023-finalists).

{{< image id="stanford" width_desktop="4" width_mobile="12" image1="/images/supported_by/HAI.png" alt1="Stanford University" link1="https://hai.stanford.edu/ai-audit-challenge-2023-finalists" caption1="Stanford University" >}}

{{< container_close >}}

{{< container_open title="OECD Catalogue of Tools & Metrics for Trustworthy AI" icon="fas fa-toolbox" id="OECD" >}}

Algorithm Audit's bias detection tool is part of OECD's [Catalogue of Tools & Metrics for Trustworthy AI.](https://oecd.ai/en/catalogue/tools/unsupervised-bias-detection-tool)

{{< image id="oecd-image" width_desktop="4" width_mobile="12" image1="/images/BDT/oecd_logo.svg" alt1="OECD AI Policy Observatory" caption1="OECD AI Policy Observatory" link1="https://oecd.ai/en/catalogue/tools/unsupervised-bias-detection-tool" >}}

{{< container_close >}}

{{< container_open title="Hierarchical Bias-Aware Clustering (HBAC) algorithm" icon="fas fa-code-branch" id="HBAC" >}}

The bias detection tool currently only works for numeric data. According to a hierarchical search methodology, the *Hierarchical Bias-Aware Clustering* (HBAC) algorithm processes input data according to k-mean clustering algorithm. In the future, the tool will also be able to process categorical data. The HBAC-algorithm is introduced by Misztal-Radecka and Indurkya in a [scientific article](https://www.sciencedirect.com/science/article/abs/pii/S0306457321000285) as published in *Information Processing and Management* (2021). Our implementation of the HBAC-algorithm can be found on [Github.](https://github.com/NGO-Algorithm-Audit/AI_Audit_Challenge)

[Download](https://github.com/NGO-Algorithm-Audit/Bias_scan/blob/master/classifiers/BERT_disinformation_classifier/test_pred_BERT.csv) an example data set to use the bias scan tool.

{{< container_close >}}

{{< container_open title="Input data" icon="fas fa-database" id="input-data" >}}

What input does the bias scan tool need? A csv file of max. 5GB with feature columns (`features`), predicted labels by the classifier (`pred_label`) and ground truth labels (`true_label`). Only the order of the columns is important (first `features`, than `pred_label`, than `true_label`). All column values should be numeric and unscaled, i.e., not normalized or standardized. In sum:

* `features`: unscaled numeric values, e.g., `feature_1`, `feature_2`, …, `feature_n`;
* `pred_label`: 0 or 1;
* `true_label`: 0 or 1;
* Bias metric: False Positive Rate (FPR), False Negative Rate (FNR) or Accuracy.

<div><p><u>Data snippet</u>:</p><style type="text/css">.tg{border-collapse:collapse;border-spacing:0}.tg td{border-color:grey;border-style:solid;border-width:1px;font-size:14px;overflow:hidden;padding:10px 5px;word-break:normal}.tg th{border-color:#grey;border-style:solid;border-width:1px;font-size:14px;font-weight:400;overflow:hidden;padding:10px 5px;word-break:normal}.tg .tg-uox0{border-color:#grey;font-weight:700;text-align:left;vertical-align:top}.tg .tg-uoz0{border-color:#grey;text-align:left;vertical-align:top}</style><table class="tg"><thead><tr><th class="tg-uox0">feat_1</th><th class="tg-uox0">feat_2</th><th class="tg-uox0">...</th><th class="tg-uox0">feat_n</th><th class="tg-uox0">pred_label</th><th class="tg-uox0">true_label</th></tr></thead><tbody><tr><td class="tg-uoz0">10</td><td class="tg-uoz0">1</td><td class="tg-uoz0">...</td><td class="tg-uoz0">0.1</td><td class="tg-uoz0">1</td><td class="tg-uoz0">1</td></tr><tr><td class="tg-uoz0">20</td><td class="tg-uoz0">2</td><td class="tg-uoz0">...</td><td class="tg-uoz0">0.2</td><td class="tg-uoz0">1</td><td class="tg-uoz0">0</td></tr><tr><td class="tg-uoz0">30</td><td class="tg-uoz0">3</td><td class="tg-uoz0">...</td><td class="tg-uoz0">0.3</td><td class="tg-uoz0">0</td><td class="tg-uoz0">0</td></tr></tbody></table><br><p><u>Overview of supported bias metrics</u>:</p><style type="text/css">.tg{border-collapse:collapse;border-spacing:0}.tg td{border-color:#000;border-style:solid;border-width:1px;font-size:14px;overflow:hidden;padding:10px 5px;word-break:normal}.tg th{border-color:#000;border-style:solid;border-width:1px;font-size:14px;font-weight:400;overflow:hidden;padding:10px 5px;word-break:normal}.tg .tg-1wig{font-weight:700;text-align:left;vertical-align:top}.tg .tg-0lax{text-align:left;vertical-align:top}</style><table class="tg"><thead><tr><th class="tg-1wig">Metric</th><th class="tg-1wig">Description</th></tr></thead><tbody><tr><td class="tg-0lax">False Positive Rate (FPR)</td><td class="tg-0lax">The bias detection tool finds the cluster for which most true labels are predicted to be false, proportional to all true labels (False Positive Rate). For instance, the algorithm predicts a financial transaction to be riskful, while after manual inspection it turns out to be not riskful.</td></tr><tr><td class="tg-0lax">False Negative Rate (FNR)</td><td class="tg-0lax">The bias detection tool finds the cluster for which most false labels are predicted to be true, proportional to all false labels (False Negative Rate). For instance, the algorithm predicts a financial transaction not to be riskful, while after manual inspection it turns out it is riskful.</td></tr><tr><td class="tg-0lax">Accuracy</td><td class="tg-0lax">Sum of True Positives (TPs) and True Negatives (TNs), proportional to all predictions.</td></tr></tbody></table><div style="margin-top:20px"><a style="color:#005aa7" href="https://en.wikipedia.org/wiki/Confusion_matrix#Table_of_confusion" target="_blank">Learn more</a> about bias metrics.</div></div>

{{< container_close >}}

{{< container_open title="FAQ" icon="fas fa-question-circle" >}}

##### Why this bias detection tool?

* No data needed on protected attributes of users (unsupervised bias detection);
* Model-agnostic (AI binary classifiers only);
* Informs human experts which characteristics of AI-sytem behavior should manually be scrutinized;
* Connecting quantitative, statistical tools with the qualitative doctrine of law and ethics to assess fair AI;
* Developed open-source and not-for-profit.

##### By whom can the bias detection tool be used? 

The bias detection tool allows the entire ecosystem involved in auditing AI, e.g., data scientists, journalists, policy makers, public- and private auditors, to use quantitative methods to detect bias in AI systems.

##### What does the tool compute? 

A statistical method is used to compute which clusters are relatively often misclassified by an AI system. A cluster is a group of data points sharing similar features. On these features the AI-system is initially trained. The tool identifies and visualizes the found clusters automatically. The tool also assesses how individuals in a deviating cluster differ (in terms of the provided features) from others outside the cluster. If the differences are statistically significant is directly tested by means of [Welch’s two-samples t-test](https://en.wikipedia.org/wiki/Welch%27s_t-test) for unequal variances. All results kan directly be downloaded as a pdf file.

#### The tool detects prohibited discrimination in AI? 

No. The bias detection tool serves as a starting point to assess potentially unfair AI classifiers with the help of subject-matter expertise. The features of identified clusters are examined on critical links with protected grounds, and whether the measured disparities are legitimate. This is a qualitative assessment for which the context-sensitive legal doctrine provides guidelines, i.e., to assess the legitimacy of the aim pursued and whether the means of achieving that aim are appropriate and necessary. In a [case study](/algoprudence/cases/bert-based-disinformation-classifier-aa202301/) of Algorithm Audit – in which the bias detection tool was tested on a BERT-based disinformation classifier – a normative advice commission argued that the measured quantitative deviations could be legitimised. Legitimisation of unequal treatment is a context-sensitive taks for which legal frameworks exist, such an assessment of proportionality, necessity and suitability. This qualitative judgement will always be a human task.

##### For what type of AI does the tool work? 

Currently, only binary classification algorithms can be reviewed. For instance, prediction of loan approval (yes/no), disinformation detection (true/false) or disease detection (positive/negative).

##### What happens with my data?

Your csv file is uploaded to a Amazon Web Services (AWS) bucket, where it is processed by Python code. Once the HBAC-algorithm has identified clusters, the results are sent back to the browser and the data is immediately deleted. Usually, your data is stored only for 5-10 seconds in the cloud environment. The web application is built according to the below architecture diagram.

{{< image id="architecture-diagram" width_desktop="12" width_mobile="12" image1="/images/BDT/architecture.png" alt1="Architecture diagram bias detection tool web app" caption1="Architecture diagram bias detection tool web app" >}}

##### In sum 

Quantitative methods, such as unsupervised bias detection, are helpful to discover potentially unfair treated groups of similar users in AI systems in a scalable manner. Automated identification of cluster disparities in AI models allows human experts to assess observed disparities in a qualitative manner, subject to political, social and environmental traits. This two-pronged approach bridges the gap between the qualitative requirements of law and ethics, and the quantitative nature of AI (see figure). In making normative advice, on identified ethical issues publicly available, over time a [repository](/algoprudence/) of case reviews emerges. We call case-based normative advice for ethical algorithm *algoprudence*. Data scientists and public authorities can learn from our algoprudence and can criticise it, as ultimately normative decisions regarding fair AI should be made within democratic sight.

[Read more](/algoprudence/how-we-work/) about algoprudence and how Algorithm Audit's builds it.

{{< image id="overview-JFAM" width_desktop="12" width_mobile="12" image1="/images/BDT/Qualitative_quantitative_EN.png" alt1="Overview Joint Fairness Assessment Method" caption1="Overview Joint Fairness Assessment Method" >}}

{{< container_close >}}

{{< team >}}
