<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse justify-content-end" id="navbarResponsive">
    <ul class="navbar-nav ml-auto text-nowrap">
        <li class="nav-item {{ request()->is('/') ? 'active' : '' }}">
            <a class="nav-link d-flex flex-column align-items-center" href="{{ url('/') }}">
                <ion-icon name="home-outline"></ion-icon> <span class="outlined-text">{{ __('site.home') }}</span>
        </a>
        </li>
        <li class="nav-item {{ request()->is('products*') ? 'active' : '' }}">
            <a class="nav-link d-flex flex-column align-items-center" href="{{ url('/products?product=all') }}">
                <ion-icon name="earth-outline"></ion-icon><span class="outlined-text">{{ __('site.pruducts') }}</span>
            </a>
        </li>
        <div class="nav-item dropdown">
            <a class="nav-link d-flex flex-column align-items-center" data-bs-toggle="dropdown"
                aria-expanded="false" role="button">
                <ion-icon name="clipboard-outline"></ion-icon><span class="outlined-text">Catalog</span>
            </a>
            <div class="dropdown-menu">
                <ul class="nav flex-column bg-white text-center">
                    @foreach ($categories as $c)
                    <a href="{{ url('/products?product=new&category=' . $c->slug) }}" style="color: black">
                        <li class="nav-item m-2">{{ app()->getLocale() === 'mm' ? $c->mm_name : $c->name }}</li>
                    </a>
                    <div class="border opacity-50"></div>
                    @endforeach
                </ul>
            </div>
        </div>
        <li class="nav-item">
            <a class="nav-link d-flex flex-column align-items-center position-relative" href="/profile#/cart">
                <ion-icon name="cart-outline"></ion-icon><span class="outlined-text">{{ __('site.cart') }}</span>
                @auth
                <span id="cart" class="position-absolute top-0 start-100 @if ($cartCount === 0) d-none @endif
                        translate-middle badge bg-danger rounded-pill">{{ $cartCount }}</span>
                @endauth
            </a>
        </li>
        <small class="small-menu d-none">Account settings</small>
        @guest
        <li class="nav-item nav-hide"><a class="nav-link" href="{{ url('/login') }}">{{ __('site.log in') }}</a></li>
        <li class="nav-item nav-hide"><a class="nav-link" href="{{ url('/register') }}">{{ __('site.sign in') }}</a>
        </li>
        @endguest
        @auth
        <li class="nav-item nav-hide"><a class="nav-link" href="{{ url('/profile') }}">{{ __('site.profile') }}</a>
        </li>
        <li class="nav-item nav-hide"><a class="nav-link" href="{{ url('/logout') }}">{{ __('site.log out') }}</a>
        </li>
        @endauth
        <small class="small-menu d-none text-center">Language</small>
        <li class="nav-item nav-hide"><a class="nav-link" href="{{ url('/locale/mm') }}">{{ __('site.myanmar') }}</a>
        </li>
        <li class="nav-item nav-hide"><a class="nav-link" href="{{ url('/locale/en') }}">{{ __('site.english') }}</a>
        </li>
        <li class="nav-item nav-hide">
            <a class="nav-link" href="{{ url('/aboutUs') }}">{{ __('site.about') }}</a>
        </li>
        <li class="nav-item nav-hide">
            <a class="nav-link" href="{{ url('/contactUs') }}">{{ __('site.contact') }}</a>
        </li>
    </ul>
    <div class="dropdown" id="account-button-container">
        <a id="account-button" class="d-flex flex-column align-items-center dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" 
            aria-expanded="false">
            <ion-icon name="apps-outline"></ion-icon>
            <span class="outlined-text">Center</span>
        </a>
        <ul class="dropdown-menu" id="account-setting">
            @guest
            <li><a class="dropdown-item" href="{{ url('/login') }}">{{ __('site.log in') }}</a></li>
            <li><a class="dropdown-item" href="{{ url('/register') }}">{{ __('site.sign in') }}</a></li>
            <li><a class="dropdown-item" href="#">{{ __('site.language') }}</a></li>
            @endguest
            @auth
            <li><a class="dropdown-item" href="{{ url('/profile') }}">{{ __('site.profile') }}</a></li>
            <div class="dropdown ms-2" id="lang-button">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {{ __('site.language') }}
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="{{ url('/locale/mm') }}">{{ __('site.myanmar') }}</a></li>
                    <li><a class="dropdown-item" href="{{ url('/locale/en') }}">{{ __('site.english') }}</a></li>
                </ul>
            </div>
            <li><a class="dropdown-item" href="{{ url('/logout') }}">{{ __('site.log out') }}</a></li>
            @endauth
        </ul>
    </div>
</div>