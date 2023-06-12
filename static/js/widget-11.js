const URLactual3 = window.location.pathname;

if (URLactual3 == "/nosotros") {
    if (document.querySelector(".ui-search")) {
        const ui_search = document.querySelector(".ui-search");

        ui_search.remove();

        let main = document.querySelector("#root-app");

        let content = document.createElement('div')
        content.innerHTML = `   <div class="contenedor-nosotros-principal"> <div class="contenedor-nosotros-uno"> <h2>¿Quiénes Somos?</h2> <p> Kores es una empresa familiar fabricante e innovadora de productos escolares y de oficina. Nuestra empresa se estableció en 1987 y desde entonces hemos fabricado, promocionado y vendido productos marca KORES en todo el mundo. La empresa fue fundada por Wilhelm Koreska y le han seguido 4 generaciones exitosas en la conducción de la empresa.</p> </div> <div class="contenedor-nosotros-dos"> 
        <div class="nosotros-cifras"> <div class="cifra"> <p>Compañía Familiar por</p> <h2>135</h2> <span>años</span> </div> <div class="cifra"> <p>Mas de</p> <h2>500</h2> <span>productos</span> </div> <div class="cifra"> <p>Con presencia<br />en mas de</p> <h2>80</h2> <span>países</span> </div> </div> <div class="nosotros-mapa"> <img src="https://iili.io/Zf9smF.jpg" alt="mapa.jpg" /> </div> </div> <div class="contenedor-nosotros-tres"> <p> Seguimos los lineamientos internacionales del medio ambiente, calidad y estándares de seguridad del consumidor: </p>
        <div class="contendor-info"> <div class="info-izquierda"> <div class="estandares"> <div class="estandar"> <div class="icono"> <span>ISO<br />9001</span> </div> <p>ISO 9001<br />quality management</p> </div> <div class="estandar"> <div class="icono"> <span>ISO<br />14001</span> </div> <p>ISO 14001<br />quality management</p> </div> <div class="estandar"> <div class="icono"> <img src="https://iili.io/Q5mccx.png" alt="" /> </div> <p>European Standard<br />EN 71<br />Child Safety</p> </div> <div class="estandar"> <div class="icono"> <img src="https://iili.io/Q7dfM7.gif" alt="" /> 
        </div> <p>Eurasian Conformity<br />Mark</p> </div> <div class="estandar"> <div class="icono"> <img src="https://iili.io/Q739I4.jpg" alt="" /> </div> <p>Eurasian Conformity<br />Mark</p> </div> </div> </div> <div class="info-derecha"> <div class="ubicaciones"> <div class="ubicacion"> <div class="direccion"> <h4>Kores Headquarters</h4> <p>Kores GmbH</p> <p>Muthgasse 36</p> <p>1190 Vienna, Austria</p> </div> </div> <div class="ubicacion"> <img src="https://iili.io/ZfHDu9.png" alt="" /> <div class="direccion"> <h4>Kores Europe s.r.o</h4> <p>Nivka 336</p> <p>37853 Strmilov</p> <p>Czech Republic</p> </div> </div> <div class="ubicacion"> <img src="https://iili.io/ZfHDu9.png" alt="" /> <div class="direccion"> <h4>Industrias Kores de México</h4> <p>S.A. de C.V. Progreso 4,</p> <p>Alce Blanco, Naucalpan de Juárez</p> <p>53370 Estado de México</p> </div> </div> <div class="ubicacion"> <div class="direccion"> <h4>Kores Europe s.r.o.</h4> <p>Drevná 382/2</p> <p>128 00 Praha 2 - Nové Mesto</p> <p>Czech Republic</p> </div> </div> <div class="ubicacion"> <div class="direccion"> <h4>Kores Colombia S.A.S.</h4> <p>Calle 20C 42-60, Int. 1</p> <p>11001 Bogotá</p> <p>Colombia</p> </div> </div> <div class="ubicacion"> <div class="direccion"> <h4>Kores de Venezuela, C.A.</h4> <p>Calle 4 con 8, Edificio Tepal,</p> <p>La Urbina</p> <p>Caracas, Venezuela</p> </div> </div> <div class="ubicacion"> <div class="direccion"> <h4>KORES Deutschland<br>GmbH</h4> <p>Rudolf-Diesel-Straße 19</p> <p>41569 Rommerskirchen</p> <p>Germany</p> </div> </div> </div> </div> </div> </div> </div>`

        main.appendChild(content)

        throw new Error("Error controlado");
    } else if (document.querySelector(".ui-search--zrp")) {
        const ui_search = document.querySelector(".ui-search--zrp");

        ui_search.remove()

        let main = document.querySelector("#root-app");

        let content = document.createElement('div')
        content.innerHTML = ` <div class="contenedor-nosotros-principal"> <div class="contenedor-nosotros-uno"> <h2>¿Quiénes Somos?</h2> <p> Kores es una empresa familiar fabricante e innovadora de productos escolares y de oficina. Nuestra empresa se estableció en 1987 y desde entonces hemos fabricado, promocionado y vendido productos marca KORES en todo el mundo. La empresa fue fundada por Wilhelm Koreska y le han seguido 4 generaciones exitosas en la conducción de la empresa.</p> </div> <div class="contenedor-nosotros-dos"> <div class="nosotros-cifras"> <div class="cifra"> <p>Compañía Familiar por</p> <h2>135</h2> <span>años</span> </div> <div class="cifra"> <p>Mas de</p> <h2>500</h2> <span>productos</span> </div> <div class="cifra"> <p>Con presencia<br />en mas de</p> <h2>80</h2> <span>países</span> </div> </div> <div class="nosotros-mapa"> <img src="https://iili.io/Zf9smF.jpg" alt="mapa.jpg" /> </div> </div> <div class="contenedor-nosotros-tres"> <p> Seguimos los lineamientos internacionales del medio ambiente, calidad y estándares de seguridad del consumidor: </p>
        <div class="contendor-info"> <div class="info-izquierda"> <div class="estandares"> <div class="estandar"> <div class="icono"> <span>ISO<br />9001</span> </div> <p>ISO 9001<br />quality management</p> </div> <div class="estandar"> <div class="icono"> <span>ISO<br />14001</span> </div> <p>ISO 14001<br />quality management</p> </div> <div class="estandar"> <div class="icono"> <img src="https://iili.io/Q5mccx.png" alt="" /> </div> <p>European Standard<br />EN 71<br />Child Safety</p> </div> <div class="estandar"> <div class="icono"> <img src="https://iili.io/Q7dfM7.gif" alt="" /> </div> <p>Eurasian Conformity<br />Mark</p> </div> <div class="estandar"> <div class="icono"> <img src="https://iili.io/Q739I4.jpg" alt="" /> </div> <p>Eurasian Conformity<br />Mark</p> </div> </div> </div> <div class="info-derecha"> <div class="ubicaciones"> <div class="ubicacion"> <div class="direccion"> <h4>Kores Headquarters</h4> <p>Kores GmbH</p> <p>Muthgasse 36</p> <p>1190 Vienna, Austria</p> </div> </div> <div class="ubicacion"> <img src="https://iili.io/ZfHDu9.png" alt="" /> <div class="direccion"> <h4>Kores Europe s.r.o</h4> <p>Nivka 336</p> <p>37853 Strmilov</p> <p>Czech Republic</p> </div> </div> <div class="ubicacion"> <img src="https://iili.io/ZfHDu9.png" alt="" /> <div class="direccion"> <h4>Industrias Kores de México</h4> <p>S.A. de C.V. Progreso 4,</p> <p>Alce Blanco, Naucalpan de Juárez</p> <p>53370 Estado de México</p> </div> </div> <div class="ubicacion"> <div class="direccion"> <h4>Kores Europe s.r.o.</h4> <p>Drevná 382/2</p> <p>128 00 Praha 2 - Nové Mesto</p> <p>Czech Republic</p> </div> </div> <div class="ubicacion"> <div class="direccion"> <h4>Kores Colombia S.A.S.</h4> <p>Calle 20C 42-60, Int. 1</p> <p>11001 Bogotá</p> <p>Colombia</p> </div> </div> <div class="ubicacion"> <div class="direccion"> <h4>Kores de Venezuela, C.A.</h4> <p>Calle 4 con 8, Edificio Tepal,</p> <p>La Urbina</p> <p>Caracas, Venezuela</p> </div> </div> <div class="ubicacion"> <div class="direccion"> <h4>KORES Deutschland<br>GmbH</h4> <p>Rudolf-Diesel-Straße 19</p> <p>41569 Rommerskirchen</p> <p>Germany</p> </div> </div> </div> </div> </div> </div> </div>`;

        main.appendChild(content)

        throw new Error("Error controlado");
    }
}

console.log(11)
