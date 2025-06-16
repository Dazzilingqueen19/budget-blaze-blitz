from django.urls import path
from .views import *
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
  # Root URL points to the home page# Root URL points to the home view
    path("home/", home, name="home"),  # Root URL now points to the home page
    path("login/", login, name="login"),  # Login page
  # Home page
    path("Birthday_Party/", Birthday_Party, name="Birthday_Party"),
    path("engagement/", engagement, name="engagement"),
    path("farewell/", farewell, name="farewell"),
    path("friends/", friends, name="friends"),
    path("about/", about, name="about"),
    path("gallery/", gallery, name="gallery"),
    path("games/", games, name="games"),
    path("memory_game/", memory_game, name="memory_game"),
    path("puzzle_game/", puzzle_game, name="puzzle_game"),
    path("quiz_game/", quiz_game, name="quiz_game"),
    path("spin_wheel/", spin_wheel, name="spin_wheel"),
    path("tic_tac_toe/", tic_tac_toe, name="tic_tac_toe"),
    path("word_scramble/", word_scramble, name="word_scramble"),
    path("signup/", signup, name="signup"),
    path("booking/", booking, name="booking"),
    path("dashboard/", dashboard, name="dashboard"),
    path("customer_dashboard/", customer_dashboard, name="customer_dashboard"),
    path("vendor_dashboard/", vendor_dashboard, name="vendor_dashboard"),
    path("bookingtwo/", bookingtwo, name="bookingtwo"),
    path("bookingthree/", bookingthree, name="bookingthree"),
    path("bookingfour/", bookingfour, name="bookingfour"),
    path("truth_or_dare/", truth_or_dare, name="truth_or_dare"),
]  + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)