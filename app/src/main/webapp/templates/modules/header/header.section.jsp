<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>
<header class="gl-header">
    <!-- TOPBAR -->
    <s:include value="header.topbar.jsp"/>
    <!-- END -->

    <!-- BOTTOM BAR/NAVIGATION -->
    <div class="gl-header-bottombar">
        <!-- Navigation Menu start-->
        <nav class="navbar gl-header-main-menu" role="navigation">
            <div class="container">

                <!-- Navbar Toggle -->
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <!-- Logo -->
                    <div>
                        <div style="display: inline-block;margin: 0px;padding: 0px;">
                            <img style="padding: 0px 0px 15px;" id="logo" src="http://static.anunci.us/theme/favicon/favicon-32x32.png"/>
                            <a href="/">
                                <h2 style="padding: 0px;margin: 0px;font-family: Fredoka One;">Anuncius</h2>
                            </a>
                        </div>
                    </div>
                </div>
                <!-- Navbar Toggle End -->
                <!-- navbar-collapse start-->
                <s:include value="header.navmenu.jsp"/>
                <!-- navbar-collapse end-->

                <!-- OTHER BTNS -->
                <div class="gl-extra-btns-wrapper">
                    <a href="#login" class="gl-add-post-btn" id="gl-side-menu-btn" style="background-color: #bababa; margin: 2px;">Mi cuenta</a>
                    <a href="#publish" class="gl-add-post-btn" style="margin: 2px;">+ Publicar</a>

                    <!-- COMPARE BTN -->
                    <div class="gl-compare-icon">
                        <div class="gl-compare-btn-wrapper">
                            <span class="gl-compare-item-num">1</span>
                            <div class="gl-compare-btn">
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </div>
                        </div>
                        <ul id="gl-compare-menu" class="gl-compare-menu">
                            <li>
                                <div class="gl-compare-item-img">
                                    <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAA3AEEDASIAAhEBAxEB/8QAGwAAAgIDAQAAAAAAAAAAAAAAAAQFBgIDBwH/xAA7EAACAQMCAQgGBgsAAAAAAAABAgMABBEFIRIGExQiMUFRYRUycYGRoSNCUlNUkgcWJDNilLHB0eHw/8QAGgEAAgMBAQAAAAAAAAAAAAAAAgMABAUBBv/EACIRAAICAQQCAwEAAAAAAAAAAAABAgMRBBIhMQVBExRScf/aAAwDAQACEQMRAD8AfKPxHrHbzr1VkP1mHvpgxEMa9CGtrcZCRpXjBGWOPbWRGRs7e89tbhFk9nwqH1LVOZdlgcKkfrMBniPgKRdfCpZkWtPprL5bYDd3dwWEHPXU/Nx5C8RJ3PdWclzDAcS3AU+BO4qIfTDcxKbtuevJRzhhkOUZR2L5Edx8c17dIk0DXUfFlDiVGHWTxz7Kp262UOol/T+PhZ3PoffWbZR9Hzsh8hgfOlZdfmBASJVycDiYkmo0n3ViQDvt7+6qb1t0veDSj42iPrP9JH0xffeJ8KK0dEufw8n5aKD7Fv6C+rp/yi5C2LH1TuayNkRvke89lNCXc8PjWu5kmEDG3jV5cdUMcDPia1XYzzqrTIHW70Wo6LCwMrDrkfVH+arto8LyzXszA21kez7cnd8Kw1xdQtI5XnCI7uymVn4sEYz/AFpXSlgt9HuBes9xHJcL+72weHYVm5lZbvs6XRs5rqo+Kl5b7Y7cXssvKnSeu4WeNHKBttwaxstcS7S8kYDplirc+oHVuIgcb+dOLLp4v7L9gPPBEWGR33QY2rRp93a3bXkdlp8dpKIWZpFAJbfsPvpspRmsFaG6t7heKRJYw8aOqH1RIMEDuyKkdD086prNraYJWRxx+Sjc/Klb2a20jTory8Ekiytjq9ucZq5ciobddQhu4kP0tuXHjggGqqpeeTQlrI7cJF76Jbfcp8KKX6f/AAUVawjN5OYraajcpG8msTBQAwVUAx34PjT0DXDo8D30jyRbl84Jzv3VptbhBaROxAHNqTnu2pPk7erfahqkiD6MOgXPadjn50b4FJHnL/k/cadponWWaayaFWaWU54JWOPmMVULANdaJewRgu3S422PaOH/AFXcdds/SfJ3oJRH56NAOMZ4NvW8yK5VZaZJBHz9uI2gcsOIggHhOMkeOc/Cg3c4DS4yWfkvyJ07W4bLUr83CXVkkYVUfCggd476o/JqxltOWmtJzbCHhmRGbsOHrqn6PLnn9PvONeDmpuDfYHbORmoWXSr06hdyrYxxCSWQRs8oUvknGPbXeEyckcdItdUtrRrgvmEdXhOO0VZ+S0K22oW8CszCOMqGY7nbvqsyTXeixwQXsCLLIOqiShifP2Ur+ugsA8kcJMp4okwfVyMZNC7Ip4yQ670SP7bfmorivpu9+8b+YNFK+aIRbpuRVi8RS3vLuAEYxxBxjw38q90jkTZ6MHW2vLjDNkhgO2iinZeQUkWS5nEVoHlXiSJMbd4FRWpXsWk6VHNBH0cndI4lGN9yD/eiilSD9C82pXraDc3GUgnjZRlR25qnajrV5LqKRStIwiEkbOGG4znix8qKKQ+Y8nBC8v8AUtYYvDbLaKo4GLOGLDG5zuezwpeXR5IBHPNG8ssjZQFwAfbv5UUV3HIeEh30fc/gLT/vfRRRUwOwf//Z" alt="Compare" class="gl-lazy">
                                </div>

                                <div class="gl-compare-item-name">
                                    <a href="index.html">temp</a>
                                </div>

                                <div class="gl-compare-del-btn">
                                    <a href="index.html">
                                        <i class="ion-android-close"></i>
                                    </a>
                                </div>
                            </li>

                            <li class="gl-comp-btns-wrapper">
                                <a href="#compare" class="gl-btn gl-comp-btn">Comparar</a>

                                <a href="#clear" class="gl-clear-btn">Vaciar lista</a>
                            </li>
                        </ul>
                    </div>
                    <!-- END -->
                </div>
                <!-- END -->

            </div>
        </nav>
        <!-- Navigation Menu end-->
    </div>
    <!-- END -->
</header>