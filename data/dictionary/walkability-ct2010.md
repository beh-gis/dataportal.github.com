---
layout: page
categories: dictionary ct2010
---

##Walkability Variables

---

####**geoid**
Unique 11-digit US 2010 Census Tract ID.


####**t10km2**
Total area of US 2010 Census Tract geography in km2.
 
####**t10lndkm2**
Total land area of US 2010 Census Tract geography in km2 (inland water bodies removed).
 
####**t10cnt**
Count of unique 2010 Census Blocks nested within each Tract and whose walkability index scale values participated in averaging-up process for each Tract.
 
####**t10resdn1**
Density of residential units: z-scored.
 
####**t10intden**
Density of unique streets intersections per km2: z-scored.
 
####**t10entrpy**
Entropy land use mix: z-scored.
 
####**t10rtlfar**
Retail floor area ratio: z-scored.
 
####**t10sub07d**
Density of subway stations per km2: z-scored.
 
####**t10walk**
BEH Walkability Scale.
 
####**t10walkc**
Quintiles of BEH Walkability Scale.

---

The information below is from a BEH data dictionary by James Quinn, Senior GIS Analyst called [GIS Code Book: New York City 2010 Census Tract Walkability Index](https://github.com/beh-gis/beh-gis.github.com/raw/master/projects/data_dictionary/walkability-gis-codebook-2010-tracts-20150112.pdf)

###Walkability Index Scale
A number of researchers have constructed walkability indices which summarize built environment features believed to promote walking. Although specification details vary, these indices typically include measures of population density, land use, and street network. Our walkability measure was adapted from that employed in recent papers by Frank and colleagues (2005 and 2006), which includes four components: residential population density (density of population per total residential land area), intersection density, an entropy measure of land use based on the distribution of building floor area among six land use types (education, entertainment, single-family residential, multi-family residential, retail, and office), and the retail floor area ratio, or the ratio of retail building floor area to retail land area. All of the Frank components were z-scored and summed, with intersection density receiving a double weight for the Frank Scale, but not for our scale. Our “BEH walkability scale” is documented in a paper by Neckerman and colleagues (2009).

* *Frank et al. Linking objectively measured physical activity with objectively measured urban form: findings from SMARTRAQ. American Journal of Preventive Medicine. 2005;28(2 Suppl 2):117-125.*

            
Important Note:

#Walkability Index Scales: City-­Wide Buffers
As an alternative to creating a ‘neighborhood walkability index scale’ based solely on the z-scored components within buffers specific to a study cohort, the BEH Working Group has developed a walkability index scale that considers the z-scored components across New York City as a whole.



#Averaging up to Tract
In order to assign each 2010 Census Tract with the city-wide walkability index scale, the walkability index scale values for each Block centroid were simply averaged up to the Tract level. The following variables are the result of that process:

Unique 11-digit US 2010 Census Tract ID.

Total area of US 2010 Census Tract geography in km2.

Total land area of US 2010 Census Tract geography in km2 (inland water bodies removed).

Count of unique 2010 Census Blocks nested within each Tract and whose walkability index scale values participated in averaging-up process for each Tract.

BEH Walkability Scale.

#Walkability Index Scale Variables

Density of unique streets intersections per km2: z-scored.

Density of subway stations per km2: z-scored.

Retail floor area ratio: z-scored.

Density of residential units: z-scored.

Entropy land use mix: z-scored.

Quintiles of BEH Walkability Scale.

**Please note that the variables in text below have not been provided in this deliverable and are only described here to provide context for the variables that are being provided.**


Density of unique streets intersections per km2.

Density of subway stations per km2.

Retail floor area ratio – Retail building floor area divided by retail land area in km2.

Density of res units – Number of residential units divided by total residential building floor area in km2.

Land Use Mix – An entropy measure using the five of the six land use types employed in Frank et al. (2006). Single- and multi-family residential areas were combined because most housing in New York City is multi-family. Parcel-level measures of residential, office, and retail floor area were available from the MapPLUTO (version 04c; October 2004-October 2005) database. We used the MapPLUTO building class codes to identify buildings associated with education (schools) or entertainment (theaters, recreational facilities), and attributed the entire floor area of the identified building to education or

* ###Components of the Entropy Measure:
	* ####b1_b1
	Total building area for Education uses in square feet (set to .000001 if 0)
	Total building area for Entertainment uses in square feet (set to .000001 if 0)
	Total building area Residential uses in square feet (set to .000001 if 0)
Total building area for Retail uses in square feet (set to .000001 if 0)
Total building area for Office uses in square feet (set to .000001 if 0)
Total floor area across the five land uses in square feet (set to .000001 if 0)
The total number of land uses represented (between 1 and 5)

###ArcMap Entropy Field Calculation Expression:
	entropy = –((([b1] / [a]) * log ( [b1] / [a] )) + (([b2] / [a]) * log ( [b2] / [a] )) + (([b3] / [a]) * log ( [b3] / [a] )) + (([b4] / [a]) * log ( [b4] / [a] )) + (([b5] / [a]) * log ( [b5] / [a] ))) / log ( [n] )