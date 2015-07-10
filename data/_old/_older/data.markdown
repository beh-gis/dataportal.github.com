---
layout: page
title: Data
permalink: /data/
---

####<a name="top"></a>*Menu*
* [Walkability](#walk)
* [Tree Canopy](#tree)
* [Alcohol Licensing](#alcohol)
* [US Census American Community Survey Data 2006-2010](#acs0610)
* [US Census Data Download Tool](#census)
<!--* [FAQ]()-->
  
---

##<a name="walk"></a>Walkability Data


---

<center><img src="https://raw.githubusercontent.com/beh-gis/beh-gis.github.com/master/img/walkability_tract_legend_clip.png" width="35%" height="35%" alt="walkability"/></center>

<iframe width='100%' height='520' frameborder='0' src='http://dms2203.cartodb.com/viz/a7e9cb92-9b52-11e4-b578-0e9d821ea90d/embed_map' allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>


---

This dataset represents BEH's Walkability Measure by NYC DCP Census Tract (2010).
			
* **Census Tract (2010)**
	
	* *Walkability Tables*
		
		* [Download BEH Walkability CSV](https://raw.githubusercontent.com/nygeog/beh_public/master/data/walkability/data/t10_walkability_recalc.csv)
		* [View BEH Walkability Table in Browser](https://github.com/nygeog/beh_public/blob/master/data/walkability/data/t10_walkability_recalc.csv)
			
	* *GIS Shapefiles*
	
		* [Download the joined Walkability Data and the NYC 2010 Tracts in CartoDB as Shapefile, KML, SVG, GeoJSON or with API](https://dms2203.cartodb.com/tables/nyct2010_walkability)
		
		* [NYC Department of City Planning 2010 Census Tracts (Clipped to Shoreline) Shapefile](http://www.nyc.gov/html/dcp/download/bytes/nyct2010_14d.zip) Note: NYC DCP's Tract file has 2,166 Tracts, our BEH dataset uses 2,164. The two missing tracts are water/piers. Drop them from the Tracts shapefile.
			
	* *Data Dictionary*
		
		* [Download Data Dictionary](https://github.com/nygeog/beh_public/blob/master/data/walkability/docs/walkability-gis-codebook-2010-tracts-20150112.pdf?raw=true)
			
* **Community District**
	
	* *Walkability Tables*
		
		* [Download BEH Walkability CSV](https://raw.githubusercontent.com/nygeog/beh_public/master/data/walkability/data/comdist_gis_metrics_11dec2014.csv)
		* [View BEH Walkability Table in Browser](https://github.com/nygeog/beh_public/blob/master/data/walkability/data/comdist_gis_metrics_11dec2014.csv)
			
	* *GIS Shapefiles*
		
		* [NYC Department of City Planning Community Districts Shapefile](http://www.nyc.gov/html/dcp/download/bytes/nycd_14d.zip)
			
	* *Data Dictionary*
		
		* [Download Data Dictionary](https://github.com/nygeog/beh_public/blob/master/data/walkability/docs/GIS-Codebook-CommunityDistricts-12dec2014.pdf?raw=true)
			
* **UHF (42) (2009)**
	
	* *Walkability Tables*
		
		* [Download BEH Walkability CSV](https://raw.githubusercontent.com/nygeog/beh_public/master/data/walkability/data/uhf42_gis_metrics_11dec2014.csv)
		* [View BEH Walkability Table in Browser](https://github.com/nygeog/beh_public/blob/master/data/walkability/data/uhf42_gis_metrics_11dec2014.csv)
			
	* *GIS Shapefiles*
		
		* [NYC DOHMH UHF 42 Shapefile](https://www1.nyc.gov/html/doh/downloads/zip/uhf42_dohmh_2009.zip)
			
	* *Data Dictionary*
		
		* [Download Data Dictionary](https://github.com/nygeog/beh_public/blob/master/data/walkability/docs/GIS-Codebook-UHF42-12dec2014.pdf?raw=true)
	
[Top](#top)	



---

##<a name="tree"></a>Tree Canopy Data

---

<center><img src="https://raw.githubusercontent.com/beh-gis/beh-gis.github.com/master/img/tree_canopy_tract_legend_clip.png" width="35%" height="35%" alt="tree canopy"/></center>

<iframe width='100%' height='520' frameborder='0' src='http://dms2203.cartodb.com/viz/8ea73f6c-ab1e-11e4-9f73-0e0c41326911/embed_map' allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>

---

This dataset represents the percent of the NYC DCP Census Tract (2010) covered by Tree Canopy. 

* **Census Tract (2010)**
	
	* *Tree Canopy Tables*
		
		* [Download BEH Tree Canopy CSV](https://raw.githubusercontent.com/nygeog/beh_public/master/data/tree_canopy/data/ct10_tree_canopy.csv)
		* [View BEH Tree Canopy Table in Browser](https://github.com/nygeog/beh_public/blob/master/data/tree_canopy/data/ct10_tree_canopy.csv)
			
	* *GIS Shapefiles*
		* [Download the joined Tree Canopy Data and the NYC 2010 Tracts in CartoDB as Shapefile, KML, SVG, GeoJSON or with API](http://dms2203.cartodb.com/tables/ct10_tree_canopy/public)
		
		
		* [NYC Department of City Planning 2010 Census Tracts (Clipped to Shoreline) Shapefile](http://www.nyc.gov/html/dcp/download/bytes/nyct2010_14d.zip) 

		
	* *Data Dictionary*
		
		Coming soon.
		<!--* [Download Data Dictionary](https://github.com/nygeog/beh_public/blob/master/data/walkability/docs/walkability-gis-codebook-2010-tracts-20150112.pdf?raw=true)-->
	

[Top](#top)		

---

##<a name="alcohol"></a>Alcohol License Data

---

<center><img src="https://raw.githubusercontent.com/beh-gis/beh-gis.github.com/master/img/alcohol_tract_legend_clip.png" width="35%" height="35%" alt="alcohol"/></center>

<iframe width='100%' height='520' frameborder='0' src='http://dms2203.cartodb.com/viz/b5f847d8-ab27-11e4-8da3-0e9d821ea90d/embed_map' allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>

---

This dataset represents count of Alcohol Licenses by NYC DCP Census Tract (2010) which BEH received via email 2013/04/21 from NY State Liquor Authority. 

* License Categories
	* 1 = On Premise
	* 2 = Off Premise
	* 3 = Wholesale
	* 4 = Pending
	* 5 = Disabled

* **Census Tract (2010)**
	
	* *Alcohol License Tables*
		
		* [Download Alcohol License Data CSV](https://raw.githubusercontent.com/nygeog/beh_public/master/data/alcohol_licenses/data/ct10_alcohol_licenses.csv)
		* [View Alcohol License Table in Browser](https://github.com/nygeog/beh_public/blob/master/data/alcohol_licenses/data/ct10_alcohol_licenses.csv)
			
	* *GIS Shapefiles*
		* [Download the joined Alcohol License Data and the NYC 2010 Tracts in CartoDB as Shapefile, KML, SVG, GeoJSON or with API](https://dms2203.cartodb.com/tables/ct10_alcohol_licenses/public)
		
		* [NYC Department of City Planning 2010 Census Tracts (Clipped to Shoreline) Shapefile](http://www.nyc.gov/html/dcp/download/bytes/nyct2010_14d.zip) 

		
	* *Data Dictionary*
		
		Coming soon.
		<!--* [Download Data Dictionary](https://github.com/nygeog/beh_public/blob/master/data/walkability/docs/walkability-gis-codebook-2010-tracts-20150112.pdf?raw=true)-->
	

[Top](#top)		

---

##<a name="acs0610"></a>US Census American Community Survey Data 2006-2010

---

<center><img src="https://raw.githubusercontent.com/beh-gis/beh-gis.github.com/master/img/mhhi_tract_legend_clip.png" width="35%" height="35%" alt="alcohol"/></center>

<iframe width='100%' height='520' frameborder='0' src='http://dms2203.cartodb.com/viz/0a7e8122-ab38-11e4-9bff-0e853d047bba/embed_map' allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>

---

This dataset represents US Census American Community Survey Data 2006-2010 by NYC DCP Census Tract (2010). 



* **Census Tract (2010)**
	
	* *US Census American Community Survey Data 2006-2010 Tables*
		
		* [Download US Census American Community Survey Data 2006-2010 CSV](https://raw.githubusercontent.com/nygeog/beh_public/master/data/acs_2006_10/ct10_acs_2006_2010.csv) 
		
			
	* *GIS Shapefiles*
		<!--* [Download the joined Alcohol License Data and the NYC 2010 Tracts in CartoDB as Shapefile, KML, SVG, GeoJSON or with API](https://dms2203.cartodb.com/tables/ct10_alcohol_licenses/public)-->
		
		* [NYC Department of City Planning 2010 Census Tracts (Clipped to Shoreline) Shapefile](http://www.nyc.gov/html/dcp/download/bytes/nyct2010_14d.zip) 

		
	* *Data Dictionary*
		
		* [Download Data Dictionary](https://github.com/nygeog/beh_public/blob/master/data/acs_2006_10/Codebook-Tracts2010-ACS-2006-10.pdf?raw=true)
	

[Top](#top)		



---

##<a name="census"></a>BEH US Census Data API Download Tool (beta 0.1)

---

**[Download US Census Data to JSON via the BEH Census Data API Download Tool](http://beh-gis.github.io/pages/census_api)**

This tool is only available for the following Census Geography levels:

* Census Tract

This tool is only available for the following Census Variables:

* Total Population (or estimate for ACS)

**Note:** This tool is currently in development so please <a href="mailto:dms2203@cumc.columbia.edu?Subject=BEH-GIS%20Census%20Data%20API%20Download%20Tool%20Bug%20Alert" target="_top">report bugs or issues.</a>

JSON File Format Resources:
	
* [JSON.org](http://www.json.org/)
* [Using JSON in R](http://cran.r-project.org/web/packages/rjson/rjson.pdf)
* [Using JSON in Python](https://docs.python.org/2/library/json.html)

[Top](#top)	