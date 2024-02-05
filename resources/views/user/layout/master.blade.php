<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="description" content="" />
    <meta name="author" content="" />
    <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700" rel="stylesheet" />

    <title>Nat Hti Online Mart - Grab Your Desires</title>

    <!-- Bootstrap CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">

    {{-- Toastify css --}}
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css">

    {{-- font awesome --}}
    <script src="https://kit.fontawesome.com/5922c3ed74.js" crossorigin="anonymous"></script>

    {{-- google font --}}
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    {{-- shadow font --}}
    <link href="https://fonts.googleapis.com/css2?family=Rubik+Scribble&display=swap" rel="stylesheet">
    {{-- Bree Serif font --}}
    <link href="https://fonts.googleapis.com/css2?family=Bree+Serif&display=swap" rel="stylesheet">
    
    <!-- Additional CSS Files -->
    <link rel="stylesheet" href="/web_assets/css/fontawesome.css" />
    <link rel="stylesheet" href="/web_assets/css/tooplate-main.css" />
    <link rel="stylesheet" href="/web_assets/css/owl.css" />
    <link rel="stylesheet" href="/web_assets/css/flex-slider.css">
    <link rel="stylesheet" href="/web_assets/css/custom.css">
    <link rel="stylesheet" href="/resources/css/master.css">
    @include('user.layout.css')
    @yield('style')
</head>

<body>
    <!-- Navigation -->
    <div class="row">
        <div class="col-xl-12">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top px-4">
                <div class="container" id="main-nav">
                    <a class="navbar-brand pe-4" href="{{ url('/') }}">
                        <div class="d-flex align-items-center">
                            <h1>NH</h1><img src="{{asset('assets/img/flat-icons/store.png')}}" alt=""><h1>Online Mart</h1>
                        </div>
                    </a>
                    <div id="search-box-container">
                        <input type="text" name="search" id="search" class="form-control">
                        <ion-icon id="search-icon" name="search-outline"></ion-icon>
                    </div>

                    @include('user.layout.headerNav')
                </div>
            </nav>

            <!-- Page Content -->

            @yield('content')
        </div>
    </div>

    <!-- App Marketing Here -->
    <div id="app-marketing-container">
        <div class="d-flex">
            <div class="color-tone bg-black"></div>
            <div class="color-tone bg-main"></div>
            <p id="app-marketing-title">Get The New App</p>
            <p id="app-marketing-text">All you favorite features like exclusive access, now with a
                <br>better shopping experince
                <br>
                <span class="text-decoration-underline">Learn More</span>
            </p>
        </div>
        <div class="h-100">
            <img src="{{asset('assets/img/banner/app_card.jpg')}}" alt="Get The App" class="h-100"/>
        </div>
    </div>
    <!-- Subscribe Form Ends Here -->

    <!-- Footer Starts Here -->
    <div class="footer login-off">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="logo">
                        <h2 class="my-5 text-white">NH Online Mart</h2>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="footer-menu">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Help</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">How It Works ?</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="social-icons">
                        <ul>
                            <li>
                                <a href="#"><i class="fa fa-facebook"></i></a>
                            </li>
                            <li>
                                <a href="#"><i class="fa fa-twitter"></i></a>
                            </li>
                            <li>
                                <a href="#"><i class="fa fa-linkedin"></i></a>
                            </li>
                            <li>
                                <a href="#"><i class="fa fa-rss"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Footer Ends Here -->

    {{-- Jquery --}}
    <script src="https://code.jquery.com/jquery-3.6.1.min.js"
        integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=" crossorigin="anonymous"></script>
    <!-- Bootstrap JavaScript Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous">
    </script>

    <!-- ionicons -->
    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>

    <!-- Additional Scripts -->
    <script src="/web_assets/js/custom.js"></script>
    <script src="/web_assets/js/owl.js"></script>
    <script src="/web_assets/js/isotope.js"></script>
    <script src="/web_assets/js/flex-slider.js"></script>

    {{-- Toastify js --}}
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/toastify-js"></script>

    <script language="text/Javascript">
        cleared[0] = cleared[1] = cleared[2] = 0; //set a cleared flag for each field
        function clearField(t) { //declaring the array outside of the
            if (!cleared[t.id]) { // function makes it static and global
                cleared[t.id] = 1; // you could use true and false, but that's more typing
                t.value = ''; // with more chance of typos
                t.style.color = '#fff';
            }
        }
    </script>

    @if (session()->has('success'))
        <script>
            Toastify({
                text: '{{ session('success') }}',
                duration: 2000,
                position: 'center',
                style: {
                    background: "green",
                },
            }).showToast();
        </script>
    @endif

    @if (session()->has('error'))
        <script>
            Toastify({
                text: '{{ session('error') }}',
                duration: 2000,
                position: 'center',
                style: {
                    background: "red",
                },
            }).showToast();
        </script>
    @endif

    <script>
        window.updateCart = (cart) => {
            const Cart = document.getElementById('cart');
            Cart.innerText = cart;
            if (cart === 0) {
                Cart.classList.add('d-none');
            } else {
                Cart.classList.remove('d-none');
            }
        };

        window.auth = @json(auth()->user());
        window.locale = "{{ app()->getLocale() }}";

        window.showToastError = (message) => {
            Toastify({
                text: message,
                duration: 2000,
                position: 'center',
                style: {
                    background: "red",
                },
            }).showToast();
        }

        window.showToastSuccess = (message) => {
            Toastify({
                text: message,
                duration: 2000,
                position: 'center',
                style: {
                    background: "green",
                },
            }).showToast();
        }
    </script>
    @yield('script')
</body>

</html>
