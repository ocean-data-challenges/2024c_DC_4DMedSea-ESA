.. 2023a_SSH_mapping_OSE documentation master file, created by
   sphinx-quickstart on Fri Jul 21 14:53:11 2023.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.
    
    
===========================
4DMedSea-ESA Data Challenge
===========================

.. role:: raw-html(raw)
    :format: html

:raw-html:`<br />`

.. image:: ../../figures/dc_2024_4dmedsea_banner.jpg
    :width: 1200

:raw-html:`<br />`

.. raw:: html

    <embed>  
        So far, the github page visits amount to: <a href="https://hits.seeyoufarm.com"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Focean-data-challenges%2F2023a_SSH_mapping_OSE&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=PAGE+VIEWS&edge_flat=false"/></a> 
    <br />
    
    <br />
        
    </embed>
    
    

The 4DMedSea project
====================

 

This ITT is part of the ESA Mediterranean Regional Initiative aimed at exploring and exploiting the huge synergistic opportunities offered by the increasing EO European satellite capacity together with in-situ observations, advanced models and novel technologies (AI, ICTs, cloud computing capacity, HPCs) to enhance observations over the Mediterranean region, advance the scientific understanding of the role of the Mediterranean area in the Earth and climate system and transfer that knowledge into new solutions for society.In addition, this activity makes part of the ESA Ocean Science Cluster and contributes to the joint EC-ESA Earth System Science Initiative launched in February 2020 by the European Space Agency and the European Commission (EC) Directorate-General for Research and Innovation (DG RTD) to jointly advance Earth System Science and its response to the global challenges that society is facing in the onset of this century. In particular, this activity is a contribution to the EC-ESA Flagship Action on Ocean Health aimed at developing advanced ocean observations and products and enhancing the scientific understanding of the ocean's role in the Earth and climate system and its responses to management actions to contribute to reverse the cycle of decline in ocean health and improve conditions for sustainable development of the Ocean. 
 
.. image:: _static/DC_4DMedSea_IllustrationMap.png
    :width: 500
    :align: center


In that context, the overarching objectives of the 4DMED ITT are to exploit the synergy offered by the increasing EO European satellites together with in-situ observations, advanced physical/biogeochemical/ecological models and novel technologies to develop a data-driven, 4D reconstruction of the Mediterranean Sea physical and biogeochemical state, exploit this information to further improve our understanding of the complex interactions between physical and biological processes at a broad range of temporal and spatial scales and explore options to transfer that knowledge into new solutions for society regarding the monitoring, restoration and preservation of the Mediterranean Sea Health.

The Data Challenge Setup
========================
 
Reconstruction 
--------------

The reconstruction covers the period from **January 1st, 2017 to December 31st, 2017** in the Mediterranean basin from **6°W to 36°E and 30°N to 46°N**.

Observations
------------

The SSH observations used in this study comprise data from a nadir altimeter constellation that includes:

- **Saral/Altika (alg),**  

- **Jason-2 (j2, j2g, j2n),**  

- **Jason-3 (j3, j3n),**  

- **Sentinel-3A (s3a),**  

- **Sentinel-3B (s3b),** 

- **Sentinel-6 (s6),**  

- **Haiyang-2B (h2b),** 

- **Cryosat-2 (c2, c2n).** 

The **Haiyang-2A (H2A)** altimeter data are excluded from the mapping process to enable an independent assessment of the different reconstructions.

These data are distributed by the Copernicus Marine Service https://doi.org/10.48670/moi-0014 .

  
Evaluation
----------

**Data**

- Independant nadir: Haiyang-2A (H2A)

- Independant drifters 

Drifter data are also distributed by CMEMS https://doi.org/10.17882/86236 .
 
**Metrics** 

Check Metrics Details:

- `SSH - Along track metrics <https://2024c-dc-4dmedsea-esa.readthedocs.io/en/latest/5_metrics_det/metrics_alongtrack.html>`_ 
- `Currents - Along drifter metrics <https://2024c-dc-4dmedsea-esa.readthedocs.io/en/latest/5_metrics_det/metrics_alongdrifter.html>`_
- `Currents - Lagrangian metrics <https://2024c-dc-4dmedsea-esa.readthedocs.io/en/latest/5_metrics_det/metrics_driftertraj.html>`_



 

----------------- 

:raw-html:`<br />`
 
    
.. toctree::
   :hidden:
   :maxdepth: 2
   :caption: Get started

   1_getstarted/getstarted_install.md
   1_getstarted/getstarted_navigate.md
   1_getstarted/getstarted_data.md 
   1_getstarted/getstarted_eval.md

.. toctree::
   :hidden:
   :maxdepth: 1
   :caption: Overall comparison

   2_eval_generic/overall_movies.md
   2_eval_generic/overall_scores.md
   2_eval_generic/overall_nadireval.md
   2_eval_generic/overall_driftereval.md
   
.. toctree::
   :hidden:
   :maxdepth: 2
   :caption: CMEMS product
 
   2_eval_generic/eval_DUACS.md
   
.. toctree::
   :hidden:
   :maxdepth: 2
   :caption: 4DMedSea methods
  
   2_eval_generic/eval_MIOST.md
   2_eval_generic/eval_4DVarNet.md
   
   
.. toctree::
   :hidden:
   :maxdepth: 2
   :caption: Other methods
  
   2_eval_generic/eval_BFNQG.md
 
  
   
.. toctree::
   :hidden:
   :maxdepth: 2
   :caption: Metrics details

   5_metrics_det/metrics_alongtrack.md
   5_metrics_det/metrics_alongdrifter.md
   5_metrics_det/metrics_driftertraj.md

.. toctree::
   :hidden:
   :maxdepth: 1
   :caption: Scripts

   6_scripts/modules.rst
