---
layout: post
title: "CSS en El Salvador: Estadísticas"
---

Escribir CSS es fácil. Mantener CSS no tanto.

Hablar sobre arquitectura en CSS es cada vez más importante, sobre todo ahora que el desarrollo de sitios y aplicaciones web se vuelve cada vez más y más complejo. Temas como rendimiento y escalabilidad en CSS ya son parte importante del proceso de desarrollo web, por lo que surge la pregunta: ¿cómo se está escribiendo CSS en El Salvador?

En este primer artículo te presento algunas estadísticas sobre CSS que obtuve al analizar algunos de los [sitios más visitados](http://www.alexa.com/topsites/countries/SV)* de El Salvador utilizando [CSS Stats](http://cssstats.com/):

<table class="f6 collapse ba b--light-gray w-100">
  <thead>
    <tr>
      <td class="pa2 b ba b--light-gray w-40">Métrica</td>
      <td class="pa2 b ba b--light-gray w-20"><a target="_blank" href="http://cssstats.com/stats?url=http%3A%2F%2Felblog.com&ua=Browser%20Default">elblog.com</a></td>
      <td class="pa2 b ba b--light-gray w-20"><a target="_blank" href="http://cssstats.com/stats?url=http%3A%2F%2Felsalvador.com&ua=Browser%20Default">elsalvador.com</a></td>
      <td class="pa2 b ba b--light-gray w-20"><a target="_blank" href="http://cssstats.com/stats?url=http%3A%2F%2Flapagina.com.sv&ua=Browser%20Default">lapagina.com.sv</a></td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="pv1 ba b--light-gray ph2">Peso (Kb)</td>
      <td class="pv1 ba b--light-gray ph2">111</td>
      <td class="pv1 ba b--light-gray ph2">328</td>
      <td class="pv1 ba b--light-gray ph2">65</td>
    </tr>
    <tr>
      <td class="pv1 ba b--light-gray ph2">Reglas únicas</td>
      <td class="pv1 ba b--light-gray ph2">1,033</td>
      <td class="pv1 ba b--light-gray ph2">2,475</td>
      <td class="pv1 ba b--light-gray ph2">1,077</td>
    </tr>
    <tr>
      <td class="pv1 ba b--light-gray ph2">Selectores únicos</td>
      <td class="pv1 ba b--light-gray ph2">2,610</td>
      <td class="pv1 ba b--light-gray ph2">3,288</td>
      <td class="pv1 ba b--light-gray ph2">1,227</td>
    </tr>
    <tr>
      <td class="pv1 ba b--light-gray ph2">Colores únicos</td>
      <td class="pv1 ba b--light-gray ph2">19</td>
      <td class="pv1 ba b--light-gray ph2">95</td>
      <td class="pv1 ba b--light-gray ph2">46</td>
    </tr>
    <tr>
      <td class="pv1 ba b--light-gray ph2">Colores de fondos únicos</td>
      <td class="pv1 ba b--light-gray ph2">22</td>
      <td class="pv1 ba b--light-gray ph2">79</td>
      <td class="pv1 ba b--light-gray ph2">79</td>
    </tr>
    <tr>
      <td class="pv1 ba b--light-gray ph2">Tamaños de fuente únicos</td>
      <td class="pv1 ba b--light-gray ph2">28</td>
      <td class="pv1 ba b--light-gray ph2">74</td>
      <td class="pv1 ba b--light-gray ph2">30</td>
    </tr>
    <tr>
      <td class="pv1 ba b--light-gray ph2">Tamaño de regla maximo</td>
      <td class="pv1 ba b--light-gray ph2">24</td>
      <td class="pv1 ba b--light-gray ph2">27</td>
      <td class="pv1 ba b--light-gray ph2">15</td>
    </tr>
    <tr>
      <td class="pv1 ba b--light-gray ph2">Total de Media Queries</td>
      <td class="pv1 ba b--light-gray ph2">16</td>
      <td class="pv1 ba b--light-gray ph2">10</td>
      <td class="pv1 ba b--light-gray ph2">1</td>
    </tr>
    <tr>
      <td class="pv1 ba b--light-gray ph2">Total de archivos</td>
      <td class="pv1 ba b--light-gray ph2">2</td>
      <td class="pv1 ba b--light-gray ph2">66</td>
      <td class="pv1 ba b--light-gray ph2">6</td>
    </tr>
  </tbody>
</table>

## 328Kb de CSS
Según [HTTTP Archive](http://httparchive.org/interesting.php) el peso promedio de CSS a nivel mundial ronda los 73Kb (sin comprimir). En El Salvador, el promedio de CSS en los sitios analizados ronda los 168Kb. [elsalvador.com](http://www.elsalvador.com/) requiere 328Kb de CSS para poder ver su contenido.

## 16 Media Queries
A pesar que [elblog.com](http://elblog.com/) tiene una estructura bastante simple (2 columnas), es interesante observar que son necesarias 16 declaraciones de Media Queries para poder visualizar su contenido en varios dispositivos.

## 66 archivo CSS
Más archivos de CSS externos significan más peticiones. Más peticiones significa una carga más lenta del contenido. Existen herramientas que permiten concatenar y minificar archivos de CSS para que solo sea necesario cargar un solo archivo, no 6. Mucho menos 66 archivos.

## El objetivo son los usuarios
Al final lo único que a un usuario le interesa es obtener el contenido rápido y accesible. Por esa razón considero que es importante discutir este tipo de temas, no importando el tamaño o el volumen de tráfico que tengamos.

#### Lecturas recomendadas
* [CSS Escalable](http://mrmrs.io/writing/2016/03/24/scalable-css/) [Inglés]
* [Optimizar la entrega de CSS](https://varvy.com/pagespeed/optimize-css-delivery.html) [Inglés]
* [El Gráfico Especificidad](http://csswizardry.com/2014/10/the-specificity-graph/) [Inglés]


\* Datos hasta Septiembre 2016.
