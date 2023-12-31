# Check out the data challenge [website](https://2024c-dc-4dmedsea-esa.readthedocs.io) for more infos !

<p align="center">
  <img src="figures/dc_2024_4dmedsea_banner.jpg" alt="Alt Text" width="900"/>
</p>

# 2024c - DC  4DMedSea  ESA

This repository contains codes and sample notebooks for downloading and processing the 2024c 4DMedSea mapping data challenge.
Note that this data challenge is a somewhat extended version of the data challenge [2021a_SSH_mapping_OSE](https://github.com/ocean-data-challenges/2021a_SSH_mapping_OSE) in the Mediterranean Sea.

So far, the github page visits amount to: 

[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Focean-data-challenges%2F2023a_SSH_mapping_OSE&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=PAGE+VIEWS&edge_flat=false)](https://hits.seeyoufarm.com)

## The 4DMedSea project

This ITT is part of the ESA Mediterranean Regional Initiative aimed at exploring and exploiting the huge synergistic opportunities offered by the increasing EO European satellite capacity together with in-situ observations, advanced models and novel technologies (AI, ICTs, cloud computing capacity, HPCs) to enhance observations over the Mediterranean region, advance the scientific understanding of the role of the Mediterranean area in the Earth and climate system and transfer that knowledge into new solutions for society.In addition, this activity makes part of the ESA Ocean Science Cluster and contributes to the joint EC-ESA Earth System Science Initiative launched in February 2020 by the European Space Agency and the European Commission (EC) Directorate-General for Research and Innovation (DG RTD) to jointly advance Earth System Science and its response to the global challenges that society is facing in the onset of this century. In particular, this activity is a contribution to the EC-ESA Flagship Action on Ocean Health aimed at developing advanced ocean observations and products and enhancing the scientific understanding of the ocean's role in the Earth and climate system and its responses to management actions to contribute to reverse the cycle of decline in ocean health and improve conditions for sustainable development of the Ocean. 

<p align="center">
  <img src="docs/source/_static/DC_4DMedSea_IllustrationMap.png" alt="Alt Text" width="800"/>
</p>
 

In that context, the overarching objectives of the 4DMED ITT are to exploit the synergy offered by the increasing EO European satellites together with in-situ observations, advanced physical/biogeochemical/ecological models and novel technologies to develop a data-driven, 4D reconstruction of the Mediterranean Sea physical and biogeochemical state, exploit this information to further improve our understanding of the complex interactions between physical and biological processes at a broad range of temporal and spatial scales and explore options to transfer that knowledge into new solutions for society regarding the monitoring, restoration and preservation of the Mediterranean Sea Health.

## The Data Challenge Setup

### Reconstruction 

The reconstruction covers the period from **January 1st, 2017 to December 31st, 2017** in the Mediterranean basin from **6°W to 36°E and 30°N to 46°N**.
 
### Observations

The SSH observations used in this study comprise data from a nadir altimeter constellation that includes: 

- **Saral/Altika (alg),**  
- **Jason-2 (j2, j2g, j2n),**  
- **Jason-3 (j3, j3n),**  
- **Sentinel-3A (s3a),**  
- **Sentinel-3B (s3b),** 
- **Sentinel-6 (s6),**  
- **Haiyang-2B (h2b), ** 
- **Cryosat-2 (c2, c2n).** 


The **Haiyang-2A (H2A)** altimeter data are excluded from the mapping process to enable an independent assessment of the different reconstructions.

These data are distributed by the Copernicus Marine Service [`https://doi.org/10.48670/moi-0014`](https://doi.org/10.48670/moi-00146).  


 
### Evaluation

#### Data

- Independant nadir: Haiyang-2A (H2A)

- Independant drifters 

Drifter data are also distributed by CMEMS [`https://doi.org/10.17882/8623`](https://doi.org/10.17882/86236).

#### Metrics 

Check Metrics Details:

- [SSH - Along track metrics](https://2024c-dc-4dmedsea-esa.readthedocs.io/en/latest/5_metrics_det/metrics_alongtrack.html)
- [Currents - Along drifter metrics](https://2024c-dc-4dmedsea-esa.readthedocs.io/en/latest/5_metrics_det/metrics_alongdrifter.html)
- [Currents - Lagrangian metrics](https://2024c-dc-4dmedsea-esa.readthedocs.io/en/latest/5_metrics_det/metrics_driftertraj.html)


## Get started


### Installation
:computer: _**How to get started ?**_

Clone the data challenge repo: 
```
git clone https://github.com/ocean-data-challenges/2024c_DC_4DMedSea-ESA.git
```
or using SSH: 
```
git clone git@github.com:ocean-data-challenges/2024c_DC_4DMedSea-ESA.git
```

create the data challenge conda environment, named env-dc-swot-filtering, by running the following command:
```
conda env create --file=dc_environment.yml 
```
and activate it with:

```
conda activate env-dc-4dmedsea-esa
```
then add it to the available kernels for jupyter to see: 
```
ipython kernel install --name "env-dc-4dmedsea-esa" --user
```
finally, select the "env-dc-4dmedsea-esa" kernel in your notebook with Kernel > Change Kernel.

You're now good to go ! 


### Download the data

The data are hosted and can be accessed on the MEOM server opendap [here](https://ige-meom-opendap.univ-grenoble-alpes.fr/thredds/catalog/meomopendap/extract/MEOM/OCEAN_DATA_CHALLENGES/2024c_DC_4DMedSea-ESA/catalog.html).  

#### Data information

The dataset is presented with the following directory structure:

- 1) Data for experiment: obs/

**Nadir alongtrack data (L3 products) for SSH map reconstruction**

```
.
|-- obs
|   |-- alg 
|   |   |-- dt_europe_alg_phy_l3_2017* 
|   |-- c2 
|   |   |-- dt_europe_c2_phy_l3_2017* 
|   |-- j2g 
|   |   |-- dt_europe_j2g_phy_l3_2017* 
|   |-- j2n 
|   |   |-- dt_europe_j2n_phy_l3_2017* 
|   |-- j3 
|   |   |-- dt_europe_j3_phy_l3_2017* 
|   |-- s3a
|   |   |-- dt_europe_s3a_phy_l3_2017* 
``` 

- 2) Data for evaluation: eval/

**Independant nadir alongtrack data (L3 products) for SSH evaluation**

```
.
|-- eval
|   |-- indep_nadirs
|   |   |-- h2ag
|   |   |   |-- dt_europe_h2ag_phy_l3_2017*		% Haiyang-2A (H2A) Drifting Phase Europe Ocean Along track SSALTO/DUACS Sea Surface Height L3 product 
```

**Independant drifters for currents evaluation**

```
.
|-- eval
|   |-- independent_drifters 
```

**Auxiliary data for diagnostics**

```
.
|-- eval
|   |-- sad
|   |-- distance_to_nearest_coastline_60.nc
|   |-- land_water_mask_60.nc
|   |-- variance_cmems_dt_allsat.nc

```

- 3) Data for comparison

**Reconstruction maps for comparison**

```
.
|-- maps
|   |-- DUACS			% DUACS reconstruction with all sat (including evaluation)			
|   |-- MIOST		% MIOST reconstruction 
```


#### Download and read the data

The data can be downloaded locally using the wget command. We recommand that the data be stored in the `data/` repository. 
For example, to download and unzip the experiment `obs/` data:


```
cd data/ 
wget https://ige-meom-opendap.univ-grenoble-alpes.fr/thredds/fileServer/meomopendap/extract/MEOM/OCEAN_DATA_CHALLENGES/2024c_DC_4DMedSea-ESA/obs.tar.gz 
tar -xvf obs.tar.gz  
rm -f obs.tar.gz
```

**Example notebook**

A notebook to illustrate how to download and read the global data is available: [download_and_open_data.ipynb](../gallery/download_and_open_data.ipynb)
 


### Evaluation

The mapping methods are evaluated against independent data using two independant datasets:

#### Independant nadir SSH data: [Check example 1](https://github.com/ocean-data-challenges/2023a_SSH_mapping_OSE/blob/main/nb_diags_global/ssh_scores_DUACS_geos.ipynb)

The ocean surface topography reconstruction is compared with independant data from Saral/AltiKa altimeter. The metrics available using this independant dataset are:

- Grid boxes statistics (maps)
- Statistics by regimes (scalar scores) 
- Spectral effective resolution (maps)

#### Independant drifter currents data: [Check example 2](https://github.com/ocean-data-challenges/2023a_SSH_mapping_OSE/blob/main/nb_diags_global/uv_scores_DUACS_geos.ipynb)

The surface currents are assessed by comparing them to the surface drifter velocities. The metrics available using this independant dataset are:

- Grid boxes statistics (maps)
- Statistics by regimes (scalar scores)
- Zonaly averaged rotary spectra (omega-latitude plots) 
- 1D along trajectory spectrum (plots)

 

## Available tools and metrics

Cross-functional modules are gathered in the `src` directory. They include tools for regridding, plots, evaluation, writing and reading NetCDF files.   



##  Mapping evaluation results 

**Check mapping evaluation results [here](https://2024c-dc-4dmedsea-esa.readthedocs.io).**



# Acknowledgement



<!---



[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.5511905.svg)](https://doi.org/10.5281/zenodo.5511905)

# SSH Mapping Data Challenge 2021a

This repository contains codes and sample notebooks for downloading and processing the SSH mapping data challenge.

The quickstart can be run online by clicking here:
[![Binder](https://binder.pangeo.io/badge_logo.svg)](https://binder.pangeo.io/v2/gh/ocean-data-challenges/2020a_SSH_mapping_NATL60/master?filepath=quickstart.ipynb)

## Motivation

The goal is to investigate how to best reconstruct sequences of Sea Surface Height (SSH) maps from partial satellite altimetry observations. This data challenge follows an _Observation System Experiment_ framework: Satellite observations are from real sea surface height data from altimeter. The practical goal of the challenge is to investigate the best mapping method according to scores described below and in Jupyter notebooks.

### Observations
The SSH observations include SARAL/Altika, Jason 2, Jason 3, Sentinel 3A, Haiyang-2A and Cryosat-2 altimeter data. This nadir altimeters constellation was operating during the 20170101-20171231 period. Note that for the mapping the Cryosat-2 altimeter data are not taken in the mapping to perfor the independent assessment of the various reconstructions. 

### Data sequence and use
 
The SSH reconstructions are assessed over the period from 2017-01-01 to 2017-12-31.

For reconstruction methods that need a spin-up, the **observations** can be used from 2016-12-01 until the beginning of the evaluation period (31 days). This spin-up period is not included in the evaluation. For reconstruction methods that need learning from full fields, the **baseline reconstruction** or **duacs reconstrcution** can be used from 2017-01-01 to 2017-12-31. The altimeter data from Cryosat-2  should never be used so that any reconstruction can be considered uncorrelated to the evaluation period.

![Data Sequence](figures/DC-data_availability.png)

## Leaderboard

| Method   |   µ(RMSE)  |   σ(RMSE) |   λx (km) | Notes             | Reference                |
|:---------|-----------:|----------:|----------:|:------------------|:-------------------------|
| BASELINE |    0.85 | 0.09 |       140 | Covariances BASELINE OI | [example_eval_baseline.ipynb](https://github.com/ocean-data-challenges/2021a_SSH_mapping_OSE/blob/master/notebooks/example_eval_baseline.ipynb) |
| DUACS    |    0.88 | 0.07 |       152 | Covariances DUACS DT2018 | [example_eval_duacs.ipynb](https://github.com/ocean-data-challenges/2021a_SSH_mapping_OSE/blob/master/notebooks/example_eval_duacs.ipynb) |
| MIOST    |   0.89 | 0.08 |       139 | Multiscale mapping | [example_eval_miost.ipynb](https://github.com/ocean-data-challenges/2021a_SSH_mapping_OSE/blob/master/notebooks/example_eval_miost.ipynb) |
| DYMOST   |   0.89 | 0.06 |       129 | Dynamic mapping | [example_eval_dymost.ipynb](https://github.com/ocean-data-challenges/2021a_SSH_mapping_OSE/blob/master/notebooks/example_eval_dymost.ipynb) |
| BNF      |   0.88 | 0.06 |       122 | BFN mapping | [example_eval_bfn.ipynb](https://github.com/ocean-data-challenges/2021a_SSH_mapping_OSE/blob/master/notebooks/example_eval_bfn.ipynb) |
| 4DVarNet (v2021) |   **0.89** |  **0.06** |       122 | 4DVarNet mapping | [example_eval_4DVarnet.ipynb](https://github.com/ocean-data-challenges/2021a_SSH_mapping_OSE/blob/master/notebooks/example_eval_4dvarnet.ipynb) |
| 4DVarNet (v2022) |   **0.89** | 0.09 |       **109** | 4DVarNet mapping | [example_eval_4DVarnet_v2022.ipynb](https://github.com/ocean-data-challenges/2021a_SSH_mapping_OSE/blob/master/notebooks/example_eval_4dvarnet_v2022.ipynb) |



**µ(RMSE)**: average RMSE score.  
**σ(RMSE)**: standard deviation of the RMSE score.  
**λx**: minimum spatial scale resolved.   
 
## Quick start
You can follow the quickstart guide in [this notebook](https://github.com/ocean-data-challenges/2020a_SSH_mapping_NATL60/blob/master/quickstart.ipynb) or launch it directly from <a href="https://binder.pangeo.io/v2/gh/ocean-data-challenges/2020a_SSH_mapping_NATL60/master?filepath=quickstart.ipynb" target="_blank">binder</a>.

## Download the data
The data are hosted on the [AVISO+ website](https://www.aviso.altimetry.fr/en/data/products/ocean-data-challenges/2021a-ssh-mapping-ose.html) and tagged with DOI: 10.24400/527896/a01-2021.005. The website also provides a data handbook. This is the recommended access. This [wiki](https://github.com/ocean-data-challenges/2020a_SSH_mapping_NATL60/wiki/AVISO---account-creation) can help you create an AVISO account to access the data. The data are also temporarily available [here](https://ige-meom-opendap.univ-grenoble-alpes.fr/thredds/catalog/meomopendap/extract/ocean-data-challenges/dc_data1/catalog.html). They are presented with the following directory structure:

```
. 
|-- dc_obs
|   |-- dt_global_alg_phy_l3_20161201-20180131_285-315_23-53.nc
|   |-- dt_global_c2_phy_l3_20161201-20180131_285-315_23-53.nc 
|   |-- dt_global_h2g_phy_l3_20161201-20180131_285-315_23-53.nc
|   |-- dt_global_j2g_phy_l3_20161201-20180131_285-315_23-53.nc
|   |-- dt_global_j2n_phy_l3_20161201-20180131_285-315_23-53.nc
|   |-- dt_global_j3_phy_l3_20161201-20180131_285-315_23-53.nc
|   |-- dt_global_s3a_phy_l3_20161201-20180131_285-315_23-53.nc

|-- dc_maps
|   |-- OSE_ssh_mapping_BASELINE.nc
|   |-- OSE_ssh_mapping_BFN.nc
|   |-- OSE_ssh_mapping_DUACS.nc
|   |-- OSE_ssh_mapping_DYMOST.nc
|   |-- OSE_ssh_mapping_MIOST.nc
|   |-- OSE_ssh_mapping_4dvarNet.nc
|   |-- OSE_ssh_mapping_4dvarNet_2022.nc (NOT on AVISO+ yet !!!!)
|   |-- mdt.nc

```

## Baseline and evaluation

### Baseline
The baseline mapping method is optimal interpolation (OI), in the spirit of the present-day standard for DUACS products provided by AVISO. OI is implemented in the [`baseline_oi`](https://github.com/ocean-data-challenges/2021a_SSH_mapping_OSE/blob/master/notebooks/baseline_oi.ipynb) Jupyter notebook. The SSH reconstructions are saved as a NetCDF file in the `results` directory. The content of this directory is git-ignored.
   
### Evaluation

The evaluation of the mapping methods is based on the comparison of the SSH reconstructions with the *independent* Cryosat-2 along-track dataset. It includes two scores, one based on the Root-Mean-Square Error (RMSE), the other based on Fourier wavenumber spectra. The evaluation notebook [`example_data_eval`](https://github.com/ocean-data-challenges/2020a_SSH_mapping_NATL60/blob/master/notebooks/example_data_eval.ipynb) implements the computation of these two scores as they could appear in the leaderboard. The notebook also provides additional, graphical diagnostics based on RMSE and spectra.

## Data processing

Cross-functional modules are gathered in the `src` directory. They include tools for regridding, plots, evaluation, writing and reading NetCDF files. The directory also contains a module that implements the baseline method.  

## Acknowledgement

The structure of this data challenge was to a large extent inspired by [WeatherBench](https://github.com/pangeo-data/WeatherBench).


--->
