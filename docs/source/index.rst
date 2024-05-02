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
    
     
 

The 4DMedSea Data Challenge
===========================


The 4DMedSea data challenge is a comparison platform that allows a sound and fair assessment of several mapping methods in the West Mediterranean region. This platform contains an input dataset (altimetric data), for anyone to create sea level and surface current maps, as well as a reference dataset (observations independant from the input dataset) in order to evaluate the methods. The data challenge is hosted in a `github repository <https://github.com/ocean-data-challenges/2024c_DC_4DMedSea-ESA>`_ and its documentation and results are presented on this readthedocs website. 

        

:raw-html:`<br />` 
     
:raw-html:`<hr />` 

:raw-html:`<br />` 

 
Objectives
==========

The goal of the data challenge is to evaluate the methods ability to map the sea level anomaly in the Western Mediterranean during the year 2017 (evaluation period). 
The input observations used to generate the maps are conventional altimeters (Saral/Altika, Jason-2, Jason-3, Sentinel-3A, Sentinel-3B, Sentinel-6, Haiyang-2B and Cryosat-2). The evaluation observations are from an independent conventional altimeter (Haiyang-2a) and drifters. The methods evaluated, so far, are MIOST and 4DVarNet. The DUACS-CMEMS product is also provided as a reference, however the DUACS product uses the independent altimeter data so the results provided should not be looked at as an assessment of the DUACS product performance. 

A dataset of input observations, evaluation observations and evaluated maps is provided (see `Download the data <https://2024c-dc-4dmedsea-esa.readthedocs.io/en/latest/1_getstarted/getstarted_data.html>`_).
  
 
 
.. image:: _static/DC_4DMedSea_IllustrationMap.png
    :width: 500
    :align: center
    
    

:raw-html:`<br />` 
     
:raw-html:`<hr />` 

:raw-html:`<br />`  


Scoreboard
==========

.. raw:: html   

    </br>

    <h4>You can check the overall comparison for more details or click on the methods name to see their specific performances.  </h4>   
        
    <div class="tab">
      <button class="tablinks" onclick="openCity(event, 'Alongtrackscores')" id="defaultOpen"><b>Along track scores</b></button>
      <button class="tablinks" onclick="openCity(event, 'Alongdrifterscores')"><b>Along drifter scores</b></button>
      <button class="tablinks" onclick="openCity(event, 'Driftertrajectorydeviation')"><b>Drifter trajectory deviation</b></button>
    </div>

    <div id="Alongtrackscores" class="tabcontent">
      <br />
      <h3> Statistical and spectral scores </h3> 
      
      <h4><a href="https://2024c-dc-4dmedsea-esa.readthedocs.io/en/latest/5_metrics_det/metrics_alongtrack.html">[Alongtrack metrics details]</a> </h4>   
        
        </br>
        
        <h4> 4DMedSea methods </h4>

        <table>
          <thead>
            <tr> 
              <th></th>
              <th>RMSE(SLA)</th>
              <th>RMSE score(SLA)</th>
              <th>Eff. res.(SLA)</th> 
            </tr>
          </thead>
          <tbody>  
            <tr> 
              <td><strong><a href="https://2024c-dc-4dmedsea-esa.readthedocs.io/en/latest/2_eval_generic/eval_MIOST.html">MIOST</a></strong></td>
              <td>4.6 cm</td>
              <td>55 % </td>
              <td>121.3 km</td> 
            </tr>
            <tr> 
              <td><strong><a href="https://2024c-dc-4dmedsea-esa.readthedocs.io/en/latest/2_eval_generic/eval_4DVarNet.html">4DVarNet</a></strong></td>
              <td>4.5 cm</td>
              <td>56 %</td>
              <td>144.1 km </td> 
            </tr> 
          </tbody>
        </table>
        
        </br>
        

      <h4> DUACS-CMEMS product (using all sat) </h4>   

        <table>
          <thead>
            <tr> 
              <th></th>
              <th>RMSE(SLA)</th>
              <th>RMSE score(SLA)</th>
              <th>Eff. res.(SLA)</th> 
            </tr>
          </thead>
          <tbody>  
            <tr> 
              <td><strong><a href="https://2024c-dc-4dmedsea-esa.readthedocs.io/en/latest/2_eval_generic/eval_DUACS.html">DUACS</a></strong></td>
              <td>4.1 cm</td>
              <td>63 %</td>
              <td>103.0 km</td> 
            </tr> 
          </tbody>
        </table>
        
        </br>
        

      <h4> Other methods </h4>   

        <table>
          <thead>
            <tr> 
              <th></th>
              <th>RMSE(SLA)</th>
              <th>RMSE score(SLA)</th>
              <th>Eff. res.(SLA)</th> 
            </tr>
          </thead>
          <tbody>  
            <tr> 
              <td><strong> --- </strong></td>
              <td> cm</td>
              <td> %</td>
              <td> km</td> 
            </tr> 
          </tbody>
        </table>
        
        
        </br>
        
    </div>

    <div id="Alongdrifterscores" class="tabcontent">
      <br />
      <h3> Statistical scores </h3> 
      
      <h4><a href="https://2024c-dc-4dmedsea-esa.readthedocs.io/en/latest/5_metrics_det/metrics_alongdrifter.html">[Along drifter metrics details]</a>  </h4>   
        
        </br>
        
        <h4> 4DMedSea methods </h4>

        <table>
          <thead>
            <tr> 
              <th></th> 
              <th>RMSE(u)</th>
              <th>RMSE score(u)</th>
              <th>RMSE(v)</th>
              <th>RMSE score(v)</th>
            </tr>
          </thead>
          <tbody>  
            <tr> 
              <td><strong><a href="https://2024c-dc-4dmedsea-esa.readthedocs.io/en/latest/2_eval_generic/eval_MIOST.html">MIOST</a></strong></td> 
              <td>12.8 cm/s</td>
              <td>31 %</td> 
              <td>12.7 cm/s</td>
              <td>29 %</td> 
            </tr>
            <tr> 
              <td><strong><a href="https://2024c-dc-4dmedsea-esa.readthedocs.io/en/latest/2_eval_generic/eval_4DVarNet.html">4DVarNet</a></strong></td> 
              <td>13.2 cm/s</td>
              <td>30 %</td> 
              <td>13.5 cm/s</td>
              <td>25 %</td> 
            </tr> 
          </tbody>
        </table>
        
        </br>
        

      <h4> DUACS-CMEMS product (using all sat) </h4>   

        <table>
          <thead>
            <tr> 
              <th></th> 
              <th>RMSE(u)</th>
              <th>RMSE score(u)</th>
              <th>RMSE(v)</th>
              <th>RMSE score(v)</th> 
            </tr>
          </thead>
          <tbody>  
            <tr> 
              <td><strong><a href="https://2024c-dc-4dmedsea-esa.readthedocs.io/en/latest/2_eval_generic/eval_DUACS.html">DUACS</a></strong></td> 
              <td>12.1 cm/s</td>
              <td>35 %</td> 
              <td>12.5 cm/s</td>
              <td>31 %</td> 
            </tr> 
          </tbody>
        </table>
        
        </br>
        

      <h4> Other methods </h4>   

        <table>
          <thead>
            <tr> 
              <th></th> 
              <th>RMSE(u)</th>
              <th>RMSE score(u)</th>
              <th>RMSE(v)</th>
              <th>RMSE score(v)</th>
            </tr>
          </thead>
          <tbody>  
            <tr> 
              <td><strong> --- </strong></td> 
              <td>  cm/s</td>
              <td> %</td> 
              <td> cm/s</td>
              <td> %</td> 
            </tr> 
          </tbody>
        </table>
        
        
        </br>
        
    </div>
        
    <div id="Driftertrajectorydeviation" class="tabcontent">
        
        <br />
        <h3> Averaged trajectory deviation</h3> 
        <h4><a href="https://2024c-dc-4dmedsea-esa.readthedocs.io/en/latest/5_metrics_det/metrics_driftertraj.html">[Drifter trajectory metrics details]</a> </h4>
        </br>
        
        <h4> 4DMedSea methods </h4>
        
        <table>
          <thead>
            <tr> 
              <th></th>
              <th>horizon 1d</th>
              <th>horizon 2d</th>
              <th>horizon 3d</th>
              <th>horizon 4d</th>
              <th>horizon 5d</th> 
            </tr>
          </thead>
          <tbody>  
            <tr> 
              <td><strong><a href="https://2024c-dc-4dmedsea-esa.readthedocs.io/en/latest/2_eval_generic/eval_MIOST.html">MIOST</a></strong></td>
              <td>14.9 km</td>
              <td>26.9 km </td>
              <td>39.3 km</td>
              <td>50.2 km</td>
              <td>59.4 km </td>  
            </tr>
            <tr> 
              <td><strong><a href="https://2024c-dc-4dmedsea-esa.readthedocs.io/en/latest/2_eval_generic/eval_4DVarNet.html">4DVarNet</a></strong></td>
              <td>15.1 km</td>
              <td>27.3 km </td>
              <td>39.2 km</td>
              <td>49.8 km</td>
              <td>59.4 km </td>  
            </tr> 
          </tbody>
        </table>  
        
        </br>
        
      <h4> DUACS-CMEMS product (using all sat) </h4> 
        
        
        <table>
          <thead>
            <tr> 
              <th></th>
              <th>horizon 1d</th>
              <th>horizon 2d</th>
              <th>horizon 3d</th>
              <th>horizon 4d</th>
              <th>horizon 5d</th> 
            </tr>
          </thead>
          <tbody>   
            <tr> 
              <td><strong><a href="https://2024c-dc-4dmedsea-esa.readthedocs.io/en/latest/2_eval_generic/eval_DUACS.html">DUACS</a></strong></td>
              <td>13.9 km</td>
              <td>25.6 km </td>
              <td>36.0 km</td>
              <td>46.0 km</td>
              <td>54.0 km </td>  
            </tr> 
          </tbody>
        </table>  
        </br>
        
      <h4> Other methods </h4> 
        
        
        <table>
          <thead>
            <tr> 
              <th></th>
              <th>horizon 1d</th>
              <th>horizon 2d</th>
              <th>horizon 3d</th>
              <th>horizon 4d</th>
              <th>horizon 5d</th> 
            </tr>
          </thead>
          <tbody>   
            <tr> 
              <td><strong> --- </strong></td>
              <td> km</td>
              <td> km </td>
              <td> km</td>
              <td> km</td>
              <td> km </td>  
            </tr> 
          </tbody>
        </table>  
         
        

        
        </br>
        
    </div>
    <script>
    function openCity(evt, cityName) {
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
      document.getElementById(cityName).style.display = "block";
      evt.currentTarget.className += " active";
    }

    // Get the element with id="defaultOpen" and click on it
    document.getElementById("defaultOpen").click();
    </script>  
    
    <br />
    

:raw-html:`<br />` 
     
:raw-html:`<hr />` 

:raw-html:`<br />`  

 
Reconstruction 
==============

The reconstruction covers the period from **January 1st, 2017 to December 31st, 2017** in the Mediterranean basin from **6°W to 36°E and 30°N to 46°N**.


:raw-html:`<br />` 
     
:raw-html:`<hr />` 

:raw-html:`<br />`  


Observations
============

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

    
    

:raw-html:`<br />` 
     
:raw-html:`<hr />` 

:raw-html:`<br />`  
 

  
Evaluation
==========

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
   :maxdepth: 1
   :caption: The 4DMedSea project

   0_projectinfo/projectinfo.md
    
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
   :caption: Experiment 2017
 
   2_eval_generic/overall_movies.md
   2_eval_generic/overall_scores.md
   2_eval_generic/overall_nadireval.md
   2_eval_generic/overall_driftereval.md
   2_eval_generic/overall_trajeval.md
     
    
 

.. toctree::
   :hidden:
   :maxdepth: 1
   :caption: Experiment 2016-2017

   3_eval_exp20162017/overall_movies.md
   3_eval_exp20162017/overall_scores.md
   3_eval_exp20162017/overall_nadireval.md
   3_eval_exp20162017/overall_driftereval.md
   3_eval_exp20162017/overall_trajeval.md
  
   
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
