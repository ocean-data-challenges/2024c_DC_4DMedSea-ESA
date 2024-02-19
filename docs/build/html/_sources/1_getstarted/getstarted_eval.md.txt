# Input specifications

<br> 
 

<br> 

Once you have [installed the data challenge](getstarted_install.md) and [downloaded the data](getstarted_data.md), you can now evaluate your maps. Although, you might want to check first that your sea level anomaly or sea surface currents maps respect a certain format. You can then scroll through the different metrics, checking the DUACS evaluation notebooks as example. 


<br> 

## Maps format

The input netcdf files must contain: 
- `latitude`, `longitude` and `time` dimensions. 
- for sea level anomaly evaluation, a sea level anomaly variable `sla`.
- for currents evaluation, a meridional and a zonal currents variable `ugos` and `vgos`.

Note that some formatting can be done using xarray within the jupyter notebooks. For instance, you can change a variable's name simply with `ds = ds.rename_var({'my_sla':'sla'})`. 

<br> 

## Example

### Sea Level Anomaly maps format

![SLA Format](../figures/Maps_format_SLA.png)  

### Currents maps format

![Currents_Format](../figures/Maps_format_Currents.png)  

 
<br> 