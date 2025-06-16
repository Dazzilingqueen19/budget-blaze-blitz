from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth.hashers import make_password, check_password
from .models import Userdata

# ---------- Static Page Views ---------- #
def home(request):
    return render(request, "home.html")

def Birthday_Party(request):
    return render(request, "Birthday_Party.html")

def engagement(request):
    return render(request, "engagement.html")

def farewell(request):
    return render(request, "farewell.html")

def friends(request):
    return render(request, "friends.html")

def about(request):
    return render(request, "about.html")

def gallery(request):
    return render(request, "gallery.html")

def games(request):
    return render(request, "games.html")

def memory_game(request):
    return render(request, "memory_game.html")

def puzzle_game(request):
    return render(request, "puzzle_game.html")

def quiz_game(request):
    return render(request, "quiz_game.html")

def spin_wheel(request):
    return render(request, "spin_wheel.html")

def tic_tac_toe(request):
    return render(request, "tic_tac_toe.html")

def word_scramble(request):
    return render(request, "word_scramble.html")


# ---------- User Signup ---------- #
def signup(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        password1 = request.POST.get('password1')
        password2 = request.POST.get('password2')
        user_type = request.POST.get('user_type')
        mobile = request.POST.get('mobile')
        location = request.POST.get('location')
        experience = request.POST.get('experience') if user_type == 'vendor' else ''
        image = request.FILES.get('image')

        if Userdata.objects.filter(email=email).exists():
            messages.info(request, "User already exists")
        elif password1 != password2:
            messages.info(request, "Passwords do not match")
        else:
            Userdata.objects.create(
                name=name,
                email=email,
                password=make_password(password1),
                user_type=user_type,
                mobile=mobile,
                location=location,
                experience=experience,
                image=image
            )
            messages.success(request, "Signup successful! Please login.")
            return redirect('login')

    return render(request, 'signup.html')


# ---------- User Login ---------- #
def login(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')

        try:
            user = Userdata.objects.get(email=email)
            if check_password(password, user.password):
                # Store user details in session
                request.session['user_id'] = user.id
                request.session['user_type'] = user.user_type
                request.session['user_name'] = user.name
                request.session['user_email'] = user.email
                request.session['user_mobile'] = user.mobile
                request.session['user_location'] = user.location
                request.session['user_experience'] = user.experience if user.user_type == 'vendor' else None
                request.session['user_image'] = user.image.url if user.image else None


                messages.success(request, f"Welcome, {user.name}!")
                if user.user_type == 'vendor':
                    return redirect('vendor_dashboard')
                else:
                    return redirect('customer_dashboard')
            else:
                messages.error(request, "Invalid password")
        except Userdata.DoesNotExist:
            messages.error(request, "User does not exist")

    return render(request, 'login.html')


# ---------- Dashboard ---------- #
def dashboard(request):
    return render(request, 'dashboard.html')


# ---------- Customer Dashboard ---------- #
def customer_dashboard(request):
    if 'user_id' in request.session:  # Check if user is logged in
        user_data = {
            'name': request.session['user_name'],
            'email': request.session['user_email'],
            'mobile': request.session['user_mobile'],
            'location': request.session['user_location'],
            'experience': request.session.get('user_experience', None),
            'image': request.session.get('user_image', None)
        }
        return render(request, 'dashboard_customer.html', {'user_data': user_data})
    else:
        # If no user is logged in, redirect to login page
        return redirect('login')


# ---------- Vendor Dashboard ---------- #
def vendor_dashboard(request):
    if 'user_id' in request.session:
        user_data = {
            'name': request.session['user_name'],
            'email': request.session['user_email'],
            'mobile': request.session['user_mobile'],
            'location': request.session['user_location'],
            'experience': request.session.get('user_experience', None),
            'image': request.session.get('user_image', None)
        }
        return render(request, 'dashboard_vendor.html', {'user_data': user_data})
    else:
        return redirect('login')


# ---------- Booking ---------- #
def booking(request):
    return render(request, 'booking.html')  # Fixed indentation


def dashboard(request):
    return render(request, 'dashboard.html')  # Fixed indentation

def bookingtwo(request):
    return render(request, 'bookingtwo.html')  # Fixed indentation

def bookingthree(request):
    return render(request, 'bookingthree.html')  # Fixed indentation

def bookingfour(request):
    return render(request, 'bookingfour.html')  # Fixed indentation

def truth_or_dare(request): 
    return render(request, 'truth_or_dare.html')  # Fixed indentation