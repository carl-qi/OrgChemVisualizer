AFRAME.registerComponent('create-atom-buttons', {
    schema: {},

    init: function () {
        var el = this.el;
        this.createTable = function () {
            var scene = document.querySelector('a-scene');
            var menu = document.querySelector('#menu');

            var head = document.createElement('a-text');
            head.setAttribute('value', 'add atom');
            head.setAttribute('align', 'center');
            head.setAttribute('position', '0 2 0.1');
            head.setAttribute('color', '#000');
            menu.appendChild(head);

            var elem1 = document.createElement('a-box');
            elem1.setAttribute('create-atom-on-click', 'sym: H; radius: 0.3; color: #AAA');
            elem1.setAttribute('position', '-1 1 0');
            elem1.setAttribute('depth', '0.1');
            elem1.setAttribute('color', '#EF2D5E');
            menu.appendChild(elem1);
            var entityH = document.createElement('a-text');
            entityH.setAttribute('value', 'H');
<<<<<<< HEAD
            entityH.setAttribute('position', '0 0 1');
=======
            entityH.setAttribute('align', 'center');
            entityH.setAttribute('position', '0 0 0.1');
            entityH.setAttribute('color', '#000');
>>>>>>> 6b30d553e0801f100b435697185a222e51b32a42
            elem1.appendChild(entityH);

            var elem2 = document.createElement('a-box');
            elem2.setAttribute('create-atom-on-click', 'sym: C; radius: 0.5; color: #AAA');
            elem2.setAttribute('position', '0 1 0');
            elem2.setAttribute('depth', '0.1');
            elem2.setAttribute('color', '#EF2D5E');
            menu.appendChild(elem2);
            var entityC = document.createElement('a-text');
            entityC.setAttribute('value', 'C');
            entityC.setAttribute('align', 'center');
            entityC.setAttribute('position', '0 0 0.1');
            entityC.setAttribute('color', '#000');
            elem2.appendChild(entityC);

            var elem3 = document.createElement('a-box');
            elem3.setAttribute('create-atom-on-click', 'sym: N; radius: 0.5; color: #AAA');
            elem3.setAttribute('position', '1 1 0');
            elem3.setAttribute('depth', '0.1');
            elem3.setAttribute('color', '#EF2D5E');
            menu.appendChild(elem3);
            var entityN = document.createElement('a-text');
            entityN.setAttribute('value', 'N');
            entityN.setAttribute('align', 'center');
            entityN.setAttribute('position', '0 0 0.1');
            entityN.setAttribute('color', '#000');
            elem3.appendChild(entityN);

            var elem4 = document.createElement('a-box');
            elem4.setAttribute('create-atom-on-click', 'sym: O; radius: 0.5; color: #AAA');
            elem4.setAttribute('position', '-1 0 0');
            elem4.setAttribute('depth', '0.1');
            elem4.setAttribute('color', '#EF2D5E');
            menu.appendChild(elem4);
            var entityO = document.createElement('a-text');
            entityO.setAttribute('value', 'O');
            entityO.setAttribute('align', 'center');
            entityO.setAttribute('position', '0 0 0.1');
            entityO.setAttribute('color', '#000');
            elem4.appendChild(entityO);

            var elem5 = document.createElement('a-box');
            elem5.setAttribute('create-atom-on-click', 'sym: Cl; radius: 0.7; color: #AAA');
            elem5.setAttribute('position', '0 0 0');
            elem5.setAttribute('depth', '0.1');
            elem5.setAttribute('color', '#EF2D5E');
            menu.appendChild(elem5);
            var entityCl = document.createElement('a-text');
            entityCl.setAttribute('value', 'Cl');
            entityCl.setAttribute('align', 'center');
            entityCl.setAttribute('position', '0 0 0.1');
            entityCl.setAttribute('color', '#000');
            elem5.appendChild(entityCl);

            var elem6 = document.createElement('a-box');
            elem6.setAttribute('create-atom-on-click', 'sym: Br; radius: 0.7; color: #AAA');
            elem6.setAttribute('position', '1 0 0');
            elem6.setAttribute('depth', '0.1');
            elem6.setAttribute('color', '#EF2D5E');
            menu.appendChild(elem6);
            var entityBr = document.createElement('a-text');
            entityBr.setAttribute('value', 'Br');
            entityBr.setAttribute('align', 'center');
            entityBr.setAttribute('position', '0 0 0.1');
            entityBr.setAttribute('color', '#000');
            elem6.appendChild(entityBr);

            el.addEventListener('click', this.hideMenu);
        }();

          this.hideMenu = function () {
            var scene = document.querySelector('a-scene');
            var menu = document.querySelector('#menu');
            scene.removeChild(menu);
         }
    }
  });
