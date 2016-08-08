# Simple Switcher
A Simple Site Switcher

Simple site switcher that uses an  iframe to switch through a list of sites defined in a `settings.json` file.

##Usage
1. Clone the project `git clone https://github.com/alexanderwanyoike/simpleswitcher.git`
2. Create a `setting.json` file that has the required configurations for the switcher. The file should look similar to this:
```
{
  "renderDuration": 30000,
  "views" : ["http://127.0.0.1:8282", "http://127.0.0.1:4892"] 
}
```
* **views** : Specifies the urls of the sites that you want to switch though.
* **renderDuration** : How long the each site will be rendered.



