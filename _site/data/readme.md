#BEH-GIS Data Portal

[Code to generate html and javascript files](https://github.com/beh-gis/data-portal)

* [Generate html and javascript files for site](https://github.com/beh-gis/data-portal/blob/master/tasks/201506_generate_html_js/01-gen-html-js.ipynb)
* [Generate Data Dictionaries](https://github.com/beh-gis/data-portal/blob/master/tasks/201506_generate_markdown_data_dictionaries/01-gen-md-data-dictionaries.ipynb)
* [Merge tables](https://github.com/beh-gis/data-portal/blob/master/tasks/201506_v1_data_creation/00-merge-input-data-for-beh-data-portal.ipynb)

SQL Query for CartoDB Census Tracts 2010

	SELECT * FROM ct10 where ntaname != 'Airport' AND ntaname NOT LIKE 'park-cemetery%'
	
To Do: Tot Pop
