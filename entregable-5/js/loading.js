"use strict"

window.setTimeout(function(){document.querySelector("#loading").innerHTML=`<header>
<a class="logo" href="home.html">
            <img src="./images/medivet-blanco.png">
        </a> 
        <div class="search-bar">
            <input class="form-control mr-sm-2" type="search" placeholder="Busquedas" aria-label="Search">
            <a href="busqueda.html">
                <svg  id="shape1" width="20" height="20" viewBox="0 0 20 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.8594 20.1562L20 24.27L18.1009 26.7577L14.9402 22.6175C10.9627 26.4271 5.41393 25.5642 2.228 20.6404C-0.957924 15.7166 -0.698417 8.40522 2.82254 3.8899C6.34349 -0.625429 11.9294 -0.810285 15.6199 3.46639C19.3105 7.74306 19.8515 15.028 16.8594 20.1562ZM9.37712 3.90316C5.67095 3.90316 2.6665 7.83866 2.6665 12.6934C2.6665 17.5481 5.67095 21.4836 9.37712 21.4836C13.0833 21.4836 16.0877 17.5481 16.0877 12.6934C16.0877 7.83866 13.0833 3.90316 9.37712 3.90316Z" fill="gray" fill-opacity="0.85"/>
                </svg>
            </a>
        </div>
        <div class="vl"></div>
        <a class="home" href="home.html">
            <span class="iconify" data-icon="ant-design:home-outlined"></span>
            <p class="text-header">Inicio</p>
        </a>
        <a class="mensajes" href="chat.html">
            <span class="iconify" data-icon="bx:bx-chat"></span>
            <p class="text-header">Mensajes</p>
        </a>
        <div class="notificaciones">
            <span class="iconify" data-icon="ic:round-notifications-none"></span>
            <p class="text-header">Notificaciones</p>
        </div>
        <div class="profile">
            <img src="./images/profilepic.png">
            <span class="iconify dropdown-toggle" data-icon="ant-design:caret-down-filled" data-toggle="dropdown"  aria-haspopup="true" aria-expanded="false"></span>
            <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Perfil</a>
                <a class="dropdown-item" href="#">Configuracion y Privacidad</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="index.html">Cerrar Sesion</a>
            </div>
        </div> 
    </header>

    <div class="home-container">

        <div class="presentacion">

            <div class="card-profile">
                <img id="card-profile-img" src="./images/header.png">
                <div class="card-profile-body">
                    <img src="./images/profilepic.png">
                    <div class="card-profile-info">
                        <h3>Nahuel Diaz Bailey</h3>
                        <p style="font-size: 12px;">Cirujano veterinario experimentado en animales pequeños 
                        con un historial demostrado de trabajo en el centro 
                        veterinario estadounidense y la clínica Pet Lovers en Dubai.</p>
                    </div>
                </div>
            </div>

            <img class="card-profile" style="height: 21vh;" src="./images/publicidad.jpg">

        </div>

        <div class="posts" style="width: 45%;"> 

            <div class="publicar">
                <p style="border-bottom: solid 1px #F4F4F4;">Nuevo Posteo</p>
                <div class="new-post-info">
                    <input placeholder="¿Qué estas pensando?" style="border: 0;" id="inputpublicar">
                    <div>
                        <span class="iconify" data-icon="ant-design:paper-clip-outlined"></span>
                        <span class="iconify" data-icon="akar-icons:image"></span>
                        <span class="iconify" data-icon="dashicons:editor-video"></span>
                            <span class="iconify send-button" data-icon="akar-icons:send"></span>
                    </div>
                </div>
            </div>

            <div class="publicacion">
                <p style="border-bottom: solid 1px #F4F4F4; text-align: end;"><span class="iconify" data-icon="mdi:dots-horizontal"></span></p>
                <div class="post-info">
                    <div class="person-follow">
                        <div>
                            <img src="./images/postperson.png">
                        </div>
                        <div style="margin-left: 15px;">
                            <h6>Ramiro Nuñez</h6>
                            <p style="font-weight: 300; font-size: 12px;">Jefe en Clinica Veterinaria Amet</p>
                        </div>
                    </div>
                    <p style="font-size: 15px;">Los zorros tienen más de 12 sonidos diferentes 
                        para comunicarse entre ellos. Además, cada zorro emite un tono único que les 
                        ayuda a reconocerse.</p>
                    <img style="width: 100%;" src="./images/image-post.png" data-toggle="modal" data-target="#imageModal">
                    <div class="post-icons">
                        <div>
                            <span class="iconify like" data-icon="clarity:heart-solid" onclick="btnLike(this)"></span>
                            <small style="color: black; margin-right: 5px;">20</small>
                            <span class="iconify" data-icon="bi:chat-left" data-toggle="modal" data-target="#comentModal"></span>
                            <small style="color: black; margin-right: 5px;">2</small>
                        </div>
                        <div>
                            <span class="iconify" data-icon="bi:share-fill"></span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="comentModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Comentarios</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </div>
                    <div class="modal-body">
                        <div class="comentario">
                            <div class="post-info info-comentarios">
                                <div style="text-align: end;"><span class="iconify" data-icon="mdi:dots-horizontal"></span></div>
                                <div class="person-follow">
                                    <div>
                                        <img src="./images/ProfilePic (3).png">
                                    </div>
                                    <div style="margin-left: 15px;">
                                        <h6>Mariano Cervone</h6>
                                        <p style="font-weight: 300; font-size: 12px;">Estudiante de Ciencias Veterinarias</p>
                                    </div>
                                </div>
                                <p style="border-bottom: solid 1px white; text-align: end;"></p>
                                <p style="font-size: 15px;">Gracias por la informacion!</p>
                                <div class="post-icons">
                                    <div style="margin-bottom: 5px;">
                                        <span class="iconify like" data-icon="clarity:heart-solid" onclick="btnLike(this)"></span>
                                        <small style="color: black; margin-right: 5px;">20</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="comentario" style="margin-top: 10px;">
                            <div class="post-info info-comentarios">
                                <div style="text-align: end;"><span class="iconify" data-icon="mdi:dots-horizontal"></span></div>
                                <div class="person-follow">
                                    <div>
                                        <img src="./images/ProfilePic (7).png">
                                    </div>
                                    <div style="margin-left: 15px;">
                                        <h6>Diego Garcia</h6>
                                        <p style="font-weight: 300; font-size: 12px;"">Asistente en Clinica Veterinaria Paz</p>
                                    </div>
                                </div>
                                <p style="border-bottom: solid 1px white; text-align: end;"></p>
                                <p style="font-size: 15px;"> A estos animales les encanta jugar, 
                                    incluso con otras especies como los perros, gatos o seres humanos.</p>
                                <div class="post-icons">
                                    <div style="margin-bottom: 5px;">
                                        <span class="iconify like" data-icon="clarity:heart-solid" onclick="btnLike(this)"></span>
                                        <small style="color: black; margin-right: 5px;">20</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="publicar" style="padding: 0;">
                            <p style="border-bottom: solid 1px #F4F4F4;"></p>
                            <div class="new-post-info">
                                <input placeholder="Deja tu comentario.." style="border: 0;" id="inputpublicar">
                                <div>
                                    <span class="iconify" data-icon="ant-design:paper-clip-outlined"></span>
                                    <span class="iconify" data-icon="akar-icons:image"></span>
                                    <span class="iconify" data-icon="dashicons:editor-video"></span>
                                        <span class="iconify send-button" data-icon="akar-icons:send"></span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                </div>
            </div>

            <div class="modal fade" id="imageModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-image" role="document">
                <div class="modal-content" style="background-color: transparent; border: none;">
                    <div class="modal-header" style="border-bottom: none;">
                    <h5 class="modal-title" id="exampleModalLabel"></h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </div>
                    <div class="modal-body" style="text-align: center;">
                        <img src="./images/image-post.png" style="width: 600px; height: auto;">

                    </div>
                </div>
                </div>
            </div>

            <div class="publicacion">
                <p style="border-bottom: solid 1px #F4F4F4; text-align: end;"><span class="iconify" data-icon="mdi:dots-horizontal"></span></p>
                <div class="post-info">
                    <div class="person-follow">
                        <div>
                            <img src="./images/postprofile2.png">
                        </div>
                        <div style="margin-left: 15px;">
                            <h6>Camila Vasquez</h6>
                            <p style="font-weight: 300; font-size: 12px;";">Estudiante avanzada de Ciencias Veterinarias</p>
                        </div>
                    </div>
                    <p style="font-size: 15px;">Los más fieles compañeros!</p>
                    <div style="display: flex;">

                        <div style="width: 50%;">
                            <img style="width: 100%; padding-right: 10px; height: 100%;" src="./images/postimage1.png" data-toggle="modal" data-target="#image1Modal">
                        </div>
                        <div style="width: 50%;">
                            <img style="width: 100%;" src="./images/postimage2.png" data-toggle="modal" data-target="#image2Modal">
                            <img style="width: 100%; padding-top: 10px;" src="./images/postimage3.png" data-toggle="modal" data-target="#image3Modal">
                        </div>

                    </div>
                    <div class="post-icons">
                        <div>
                            <span class="iconify like" data-icon="clarity:heart-solid" onclick="btnLike(this)"></span>
                            <small style="color: black; margin-right: 5px;">15</small>
                            <span class="iconify" data-icon="bi:chat-left" data-toggle="modal" data-target="#coment1Modal"></span>
                            <small style="color: black; margin-right: 5px;">1</small>
                        </div>
                        <div>
                            <span class="iconify" data-icon="bi:share-fill"></span>
                        </div>
                    </div>
                </div>
            </div>

                        <div class="modal fade" id="coment1Modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Comentarios</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                </div>
                                <div class="modal-body">
                                    <div class="comentario">
                                        <div class="post-info info-comentarios">
                                            <div style="text-align: end;"><span class="iconify" data-icon="mdi:dots-horizontal"></span></div>
                                            <div class="person-follow">
                                                <div>
                                                    <img src="./images/ProfilePic (6).png">
                                                </div>
                                                <div style="margin-left: 15px;">
                                                    <h6>Justina Britos</h6>
                                                    <p style="font-weight: 300; font-size: 12px;">Estudiante de Ciencias Veterinarias</p>
                                                </div>
                                            </div>
                                            <p style="border-bottom: solid 1px white; text-align: end;"></p>
                                            <p style="font-size: 15px;">Que bellezas!!!</p>
                                            <div class="post-icons">
                                                <div style="margin-bottom: 5px;">
                                                    <span class="iconify like" data-icon="clarity:heart-solid" onclick="btnLike(this)"></span>
                                                    <small style="color: black; margin-right: 5px;">20</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
            
                                    <div class="publicar" style="padding: 0;">
                                        <p style="border-bottom: solid 1px #F4F4F4;"></p>
                                        <div class="new-post-info">
                                            <input placeholder="Deja tu comentario.." style="border: 0;" id="inputpublicar">
                                            <div>
                                                <span class="iconify" data-icon="ant-design:paper-clip-outlined"></span>
                                                <span class="iconify" data-icon="akar-icons:image"></span>
                                                <span class="iconify" data-icon="dashicons:editor-video"></span>
                                                    <span class="iconify send-button" data-icon="akar-icons:send"></span>
                                            </div>
                                        </div>
                                    </div>
            
                                </div>
                            </div>
                            </div>
                        </div>
            
                        <div class="modal fade" id="image1Modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-image" role="document">
                            <div class="modal-content" style="background-color: transparent; border: none;">
                                <div class="modal-header" style="border-bottom: none;">
                                <h5 class="modal-title" id="exampleModalLabel"></h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                </div>
                                <div class="modal-body" style="text-align: center;">
                                    <img src="./images/postimage1.png" style="width: 600px; height: 500px;">
            
                                </div>
                            </div>
                            </div>
                        </div>

                        <div class="modal fade" id="image2Modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-image" role="document">
                            <div class="modal-content" style="background-color: transparent; border: none;">
                                <div class="modal-header" style="border-bottom: none;">
                                <h5 class="modal-title" id="exampleModalLabel"></h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                </div>
                                <div class="modal-body" style="text-align: center;">
                                    <img src="./images/postimage2.png" style="width: 500px; height: auto;">
            
                                </div>
                            </div>
                            </div>
                        </div>

                        <div class="modal fade" id="image3Modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-image" role="document">
                            <div class="modal-content" style="background-color: transparent; border: none;">
                                <div class="modal-header" style="border-bottom: none;">
                                <h5 class="modal-title" id="exampleModalLabel"></h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                </div>
                                <div class="modal-body" style="text-align: center;">
                                    <img src="./images/postimage3.png" style="width: 400px; height: auto;">
            
                                </div>
                            </div>
                            </div>
                        </div>

            <div class="publicacion">
                <p style="border-bottom: solid 1px #F4F4F4; text-align: end;"><span class="iconify" data-icon="mdi:dots-horizontal"></span></p>
                <div class="post-info">
                    <div class="person-follow">
                        <div>
                            <img src="./images/ProfilePic (1).png">
                        </div>
                        <div style="margin-left: 15px;">
                            <h6>Alejandro Suarez</h6>
                            <p style="font-weight: 300; font-size: 12px;">Voluntario en Costa Rica</p>
                        </div>
                    </div>
                    <p style="font-size: 15px;">La isla caboverdiana de Boa Vista constituye el mejor escenario 
                        del archipiélago atlántico para avistar a la conocida 
                        como tortuga boba, una de las siete especies de quelonios que viajan por todo el mundo.</p>
                    <div class="post-icons">
                        <div>
                            <span class="iconify like" data-icon="clarity:heart-solid" onclick="btnLike(this)"></span>
                            <small style="color: black; margin-right: 5px;">20</small>
                            <span class="iconify" data-icon="bi:chat-left" data-toggle="modal" data-target="#coment2Modal"></span>
                            <small style="color: black; margin-right: 5px;">2</small>
                        </div>
                        <div>
                            <span class="iconify" data-icon="bi:share-fill"></span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="coment2Modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Comentarios</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </div>
                    <div class="modal-body">
                        <div class="comentario">
                            <div class="post-info info-comentarios">
                                <div style="text-align: end;"><span class="iconify" data-icon="mdi:dots-horizontal"></span></div>
                                <div class="person-follow">
                                    <div>
                                        <img src="./images/postperson.png">
                                    </div>
                                    <div style="margin-left: 15px;">
                                        <h6>Juan Cruz Salinas</h6>
                                        <p style="font-weight: 300; font-size: 12px;"">Owner en Manchitas PetShop</p>
                                    </div>
                                </div>
                                <p style="border-bottom: solid 1px white; text-align: end;"></p>
                                <p style="font-size: 15px;">Sería una maravillosa experiencia..</p>
                                <div class="post-icons">
                                    <div style="margin-bottom: 5px;">
                                        <span class="iconify like" data-icon="clarity:heart-solid" onclick="btnLike(this)"></span>
                                        <small style="color: black; margin-right: 5px;">20</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="comentario" style="margin-top: 10px;">
                            <div class="post-info info-comentarios">
                                <div style="text-align: end;"><span class="iconify" data-icon="mdi:dots-horizontal"></span></div>
                                <div class="person-follow">
                                    <div>
                                        <img src="./images/ProfilePic (6).png">
                                    </div>
                                    <div style="margin-left: 15px;">
                                        <h6>Justina Britos</h6>
                                        <p style="font-weight: 300; font-size: 12px;">Estudiante de Ciencias Veterinarias</p>
                                    </div>
                                </div>
                                <p style="border-bottom: solid 1px white; text-align: end;"></p>
                                <p style="font-size: 15px;"> Las tortugas marinas son un enlace 
                                    fundamental con los ecosistemas marinos. </p>
                                <div class="post-icons">
                                    <div style="margin-bottom: 5px;">
                                        <span class="iconify like" data-icon="clarity:heart-solid" onclick="btnLike(this)"></span>
                                        <small style="color: black; margin-right: 5px;">20</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="publicar" style="padding: 0;">
                            <p style="border-bottom: solid 1px #F4F4F4;"></p>
                            <div class="new-post-info">
                                <input placeholder="Deja tu comentario.." style="border: 0;" id="inputpublicar">
                                <div>
                                    <span class="iconify" data-icon="ant-design:paper-clip-outlined"></span>
                                    <span class="iconify" data-icon="akar-icons:image"></span>
                                    <span class="iconify" data-icon="dashicons:editor-video"></span>
                                        <span class="iconify send-button" data-icon="akar-icons:send"></span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                </div>
            </div>

            <div class="publicacion">
                <p style="border-bottom: solid 1px #F4F4F4; text-align: end;"><span class="iconify" data-icon="mdi:dots-horizontal"></span></p>
                <div class="post-info">
                    <div class="person-follow">
                        <div>
                            <img src="./images/ProfilePic (2).png">
                        </div>
                        <div style="margin-left: 15px;">
                            <h6>Rebeca Araujo</h6>
                            <p style="font-weight: 300; font-size: 12px;"">Veterinaria y viajera</p>
                        </div>
                    </div>
                    <p style="font-size: 15px;">El lugar más frio del mundo</p>
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/TzYprNhC4XI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div class="post-icons">
                        <div>
                            <span class="iconify like" data-icon="clarity:heart-solid" onclick="btnLike(this)"></span>
                            <small style="color: black; margin-right: 5px;">20</small>
                            <span class="iconify" data-icon="bi:chat-left" data-toggle="modal" data-target="#coment3Modal"></span>
                            <small style="color: black; margin-right: 5px;">0</small>
                        </div>
                        <div>
                            <span class="iconify" data-icon="bi:share-fill"></span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="coment3Modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Comentarios</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </div>
                    <div class="modal-body">
                        <p>No hay comentarios.</p>
                        <div class="publicar" style="padding: 0;">
                            <p style="border-bottom: solid 1px #F4F4F4;"></p>
                            <div class="new-post-info">
                                <input placeholder="Deja tu comentario.." style="border: 0;" id="inputpublicar">
                                <div>
                                    <span class="iconify" data-icon="ant-design:paper-clip-outlined"></span>
                                    <span class="iconify" data-icon="akar-icons:image"></span>
                                    <span class="iconify" data-icon="dashicons:editor-video"></span>
                                        <span class="iconify send-button" data-icon="akar-icons:send"></span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                </div>
            </div>

            <div style="text-align: center;">
                <h6 style="color: #8E44AD; text-decoration: underline; margin-top: 15px; margin-bottom: 15px;">VER MÁS</h6>
            </div>

        </div>

        

        <div class="follow">

            <div class="card-follow">
                <div>
                    <h6 style="font-size: 14px;margin-bottom: 10%;
                    margin-top: 10%;">PERSONAS QUE QUIZAS CONOZCAS</h6>
                    <div class="person-follow">
                        <div>
                            <img src="./images/followed.png">
                        </div>
                        <div style="margin-left: 15px;">
                            <h6>Marina Gomez</h6>
                            <p style="font-weight: 300;">Amante de los animales</p>
                            <a class="btnFollow btn violet-button" style="color: white; width: 150px;" onclick="btnFollow(this)">SEGUIR</a>
                        </div>
                    </div>
                    <div class="person-follow">
                        <div>
                            <img src="./images/followed2.png">
                        </div>
                        <div style="margin-left: 15px;">
                            <h6>Jose Manuel Perez</h6>
                            <p style="font-weight: 300;">Veterinario en Huellitas</p>
                            <a class="btnFollow btn violet-button btnFollow" style="color: white; width: 150px;" onclick="btnFollow(this)">SEGUIR</a>
                        </div>
                    </div>
                    <div class="person-follow">
                        <div>
                            <img src="./images/followed3.png">
                        </div>
                        <div style="margin-left: 15px;">
                            <h6>Soledad Moreno</h6>
                            <p style="font-weight: 300;">Gerente en PetMed</p>
                            <a class="btnFollow btn violet-button btnFollow" style="color: white; width: 150px;" onclick="btnFollow(this)">SEGUIR</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="publicidad">
                <img style="width: 120px; margin-top: 10px; margin-right: 30px;" src="./images/publicidad1.png">
                <img style="width: 120px; margin-top: 10px;" src="./images/publicidad2.jpg">
            </div>

        </div>

    </div> 
`;}, 2000);
