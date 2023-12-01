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



Observations
------------

The SSH observations used in this study comprise data from a nadir altimeter constellation that includes Saral/Altika (alg), Jason-2 (j2, j2g, j2n), Jason-3 (j3, j3n), Sentinel-3A (s3a), Sentinel-3B (s3b), Sentinel-6 (s6), Haiyang-2B (h2b), and Cryosat-2 (c2, c2n). These data are distributed by the Copernicus Marine Service [https://doi.org/10.48670/moi-00146](https://doi.org/10.48670/moi-00146) and cover the period from January 1st, 2017 to December 31st, 2017. The Haiyang-2A (H2A) altimeter data are excluded from the mapping process to enable an independent assessment of the different reconstructions.

In addition, independent assessment of ocean surface currents is performed using in situ data, which are also distributed by CMEMS [https://doi.org/10.17882/86236]( https://doi.org/10.17882/86236).


Data sequence and use
---------------------

The SSH reconstructions are assessed in the Mediterranean basin and over the period from 2017-01-01 to 2017-12-31.

For reconstruction methods that need a spin-up, the **observations** from other period can be used.

The altimeter data from the Haiyang-2A (H2A) altimeter and surface current velocity data mentioned above should never be used so that all reconstructions can be considered uncorrelated to the evaluation period.


 

----------------- 

:raw-html:`<br />`
 
    
.. toctree::
   :maxdepth: 2
   :caption: Get started

   1_getstarted/getstarted_install.md
   1_getstarted/getstarted_data.md 
   1_getstarted/getstarted_eval.md

.. toctree::
   :maxdepth: 1
   :caption: Generic evaluation

   2_eval_generic/eval_overall.md
   2_eval_generic/eval_DUACS.md
   2_eval_generic/eval_MIOST.md
   2_eval_generic/eval_4DVarNet.md
   2_eval_generic/eval_BFNQG.md
 
  
   
.. toctree::
   :maxdepth: 1
   :caption: Metrics details

   5_metrics_det/metrics_alongtrack.md
   5_metrics_det/metrics_alongdrifter.md
   5_metrics_det/metrics_driftertraj.md

.. toctree::
   :maxdepth: 2
   :caption: Scripts

   6_scripts/modules.rst
