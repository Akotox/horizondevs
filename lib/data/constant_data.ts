

export interface CategoryList{
    title: string;
    id: string;
}


export const flutter: CategoryList[] = [
    {"title": "Flutter State Management", "id": "flutter_state_management"},
    {"title": "Custom Widgets in Flutter", "id": "flutter_custom_widgets"},
    {"title": "Flutter Navigation", "id": "flutter_navigation"},
    {"title": "APIs in Flutter", "id": "flutter_api_integration"},
    {"title": "Testing Flutter", "id": "flutter_testing"},
    {"title": "Flutter Performance", "id": "flutter_performance"},
    {"title": "Publishing Flutter Apps", "id": "flutter_publishing"},
]


export const react: CategoryList[] = [
    {"title": "React Navigation", "id": "react_native_navigation"},
    {"title": "Styling React Native", "id": "react_native_styling"},
    {"title": "React Hooks", "id": "react_native_hooks"},
    {"title": "Performance in React Native", "id": "react_native_performance"},
    {"title": "Native Modules in React Native", "id": "react_native_native_modules"},
    {"title": "Testing React Native", "id": "react_native_testing"},
    {"title": "App State in React Native", "id": "react_native_state_management"},
]

export const swift: CategoryList[] = [
    {"title": "SwiftUI vs UIKit", "id": "swift_ui_vs_uikit"},
    {"title": "Networking in Swift", "id": "swift_networking"},
    {"title": "Core Data in Swift", "id": "swift_core_data"},
    {"title": "Swift Concurrency", "id": "swift_concurrency"},
    {"title": "Unit Testing Swift", "id": "swift_unit_testing"},
    {"title": "Custom UI in Swift", "id": "swift_custom_ui"},
    {"title": "Third-Party Libraries in Swift", "id": "swift_third_party_libraries"},
]

export const django: CategoryList[] = [
    {"title": "Django REST APIs", "id": "django_rest_api"},
    {"title": "User Auth in Django", "id": "django_authentication"},
    {"title": "Deploying Django", "id": "django_deployment"},
    {"title": "Database Optimization", "id": "django_database_queries"},
    {"title": "File Uploads in Django", "id": "django_file_uploads"},
    {"title": "Celery Tasks", "id": "django_celery"},
    {"title": "Django Testing", "id": "django_testing"},
]

export const express: CategoryList[] = [
    {"title": "Express REST APIs", "id": "node_express_rest_api"},
    {"title": "Socket.io Apps", "id": "node_socket_io"},
    {"title": "Express Middleware", "id": "node_express_middleware"},
    {"title": "Data Validation", "id": "node_data_validation"},
    {"title": "MongoDB with Node", "id": "node_mongodb"},
    {"title": "Node Error Handling", "id": "node_error_handling"},
    {"title": "Testing Node Apps", "id": "node_testing"},
]

export const spring = [
    {"title": "Spring Boot REST", "id": "spring_boot_rest"},
    {"title": "Spring Security", "id": "spring_boot_security"},
    {"title": "Database with Spring", "id": "spring_boot_database_integration"},
    {"title": "Microservices with Spring", "id": "spring_boot_microservices"},
    {"title": "Spring Testing", "id": "spring_boot_testing"},
    {"title": "Spring with Docker", "id": "spring_boot_docker"},
    {"title": "Spring Actuator", "id": "spring_boot_actuator"}
]

export const blogs = [
    {
        "id": "67149523be816f00b5d0a5f0",
        "title": "Building Responsive UI in Flutter",
        "content": [
            {
                "contentType": "heading",
                "content": "Introduction",
                "_id": "67149523be816f00b5d0a5f1"
            },
            {
                "contentType": "pg",
                "content": "In this article, we will dive into the essentials of building a responsive user interface in Flutter.",
                "_id": "67149523be816f00b5d0a5f2"
            },
            {
                "contentType": "heading",
                "content": "Understanding Layout Widgets",
                "_id": "67149523be816f00b5d0a5f3"
            },
            {
                "contentType": "pg",
                "content": "Flutter provides a variety of layout widgets to help you create responsive designs. Some key widgets include Column, Row, and Stack.",
                "_id": "67149523be816f00b5d0a5f4"
            },
            {
                "contentType": "code",
                "content": "Column(\n  children: <Widget>[\n    Text('Item 1'),\n    Text('Item 2'),\n  ],\n);",
                "imageUrl": "https://images.ui8.net/uploads/full-preview-1_1725799823019.jpg",
                "heading": "Using Column",
                "lang": "dart",
                "_id": "67149523be816f00b5d0a5f5"
            },
            {
                "contentType": "heading",
                "content": "MediaQuery for Responsiveness",
                "_id": "67149523be816f00b5d0a5f6"
            },
            {
                "contentType": "pg",
                "content": "You can use MediaQuery to obtain the dimensions of the screen and adjust your layout accordingly.",
                "_id": "67149523be816f00b5d0a5f7"
            },
            {
                "contentType": "code",
                "content": "final screenWidth = MediaQuery.of(context).size.width;\n\nContainer(\n  width: screenWidth * 0.8,\n  child: Text('Responsive Container'),\n);",
                "imageUrl": "https://images.ui8.net/uploads/full-preview-1_1725799823019.jpg",
                "heading": "Example of MediaQuery",
                "lang": "dart",
                "_id": "67149523be816f00b5d0a5f8"
            },
            {
                "contentType": "heading",
                "content": "Utilizing Flexible and Expanded",
                "_id": "67149523be816f00b5d0a5f9"
            },
            {
                "contentType": "pg",
                "content": "The Flexible and Expanded widgets allow you to control how your widgets should grow and fill the available space.",
                "_id": "67149523be816f00b5d0a5fa"
            },
            {
                "contentType": "code",
                "content": "Row(\n  children: <Widget>[\n    Expanded(child: Container(color: Colors.red)),\n    Flexible(child: Container(color: Colors.blue)),\n  ],\n);",
                "imageUrl": "https://images.ui8.net/uploads/full-preview-1_1725799823019.jpg",
                "heading": "Flexible vs Expanded",
                "lang": "dart",
                "_id": "67149523be816f00b5d0a5fb"
            },
            {
                "contentType": "heading",
                "content": "Conclusion",
                "_id": "67149523be816f00b5d0a5fc"
            },
            {
                "contentType": "pg",
                "content": "By leveraging Flutter's layout widgets and MediaQuery, you can create a responsive UI that works seamlessly on different devices.",
                "_id": "67149523be816f00b5d0a5fd"
            }
        ],
        "author": "Andre",
        "tags": [
            "Flutter",
            "Responsive UI",
            "Layout",
            "MediaQuery"
        ],
        "image": "https://images.ui8.net/uploads/full-preview-1_1725799823019.jpg",
        "related": [
            {
                "title": "Flutter State Management",
                "relatedID": "6713b8267c241aa444180ee9",
                "url": "6713b8267c241aa444180ee9",
                "_id": "67149523be816f00b5d0a5fe"
            },
            {
                "title": "Flutter Navigation Techniques",
                "relatedID": "6713b8267c241aa444180ee9",
                "url": "6713b8267c241aa444180ee9",
                "_id": "67149523be816f00b5d0a5ff"
            }
        ],
        "headlines": "Master responsive design techniques in Flutter for a better user experience.",
        "repo": "https://github.com/yourusername/flutter_responsive_ui",
        "suggestedCourses": [
            {
                "title": "Flutter Development Bootcamp",
                "relatedID": "6713b8267c241aa444180ee9",
                "url": "https://example.com/course/flutter-development",
                "imageUrl": "https://images.ui8.net/uploads/full-preview-1_1725799823019.jpg",
                "_id": "67149523be816f00b5d0a600"
            },
            {
                "title": "Flutter GetX",
                "relatedID": "6713b8267c241aa444180ee9",
                "url": "https://example.com/course/flutter-development",
                "imageUrl": "https://images.ui8.net/uploads/full-preview-1_1725799823019.jpg",
                "_id": "67149523be816f00b5d0a601"
            }
        ],
        "email": "andre@horizondevelopers.co.za",
        "website": "www.horizondevelopers.co.za",
        "date": "2024-10-20T05:29:07.542Z",
        "createdAt": "2024-10-20T05:29:07.564Z",
        "updatedAt": "2024-10-20T05:29:07.564Z",
        "__v": 0,
        "seo": "flutter_rest_api_caching_with_nosql_cache_manager"
    },
    {
        "id": "6714a6120c261d2ae529bfb3",
        "title": "State Management in Flutter: An Overview",
        "content": [
            {
                "contentType": "heading",
                "content": "Introduction",
                "_id": "6714a6120c261d2ae529bfb4"
            },
            {
                "contentType": "pg",
                "content": "State management is a crucial aspect of Flutter development, affecting how data flows in your application.",
                "_id": "6714a6120c261d2ae529bfb5"
            },
            {
                "contentType": "heading",
                "content": "Why State Management Matters",
                "_id": "6714a6120c261d2ae529bfb6"
            },
            {
                "contentType": "pg",
                "content": "Effective state management allows for better performance, cleaner code, and a more responsive user interface.",
                "_id": "6714a6120c261d2ae529bfb7"
            },
            {
                "contentType": "heading",
                "content": "Popular State Management Solutions",
                "_id": "6714a6120c261d2ae529bfb8"
            },
            {
                "contentType": "pg",
                "content": "There are several popular state management approaches in Flutter, including Provider, Riverpod, and BLoC.",
                "_id": "6714a6120c261d2ae529bfb9"
            },
            {
                "contentType": "heading",
                "content": "Using Provider",
                "_id": "6714a6120c261d2ae529bfba"
            },
            {
                "contentType": "pg",
                "content": "Provider is a simple and effective way to manage state in your Flutter applications. Here's how to get started:",
                "_id": "6714a6120c261d2ae529bfbb"
            },
            {
                "contentType": "code",
                "content": "import 'package:provider/provider.dart';\n\nclass MyModel extends ChangeNotifier {\n  int _counter = 0;\n  int get counter => _counter;\n\n  void increment() {\n    _counter++;\n    notifyListeners();\n  }\n}",
                "imageUrl": "https://images.ui8.net/uploads/full-preview-1_1725799823019.jpg",
                "heading": "Creating a Model",
                "lang": "dart",
                "_id": "6714a6120c261d2ae529bfbc"
            },
            {
                "contentType": "heading",
                "content": "Using Riverpod",
                "_id": "6714a6120c261d2ae529bfbd"
            },
            {
                "contentType": "pg",
                "content": "Riverpod is a more advanced and flexible state management solution, offering better performance and more features.",
                "_id": "6714a6120c261d2ae529bfbe"
            },
            {
                "contentType": "code",
                "content": "final counterProvider = StateProvider<int>((ref) => 0);\n\nvoid incrementCounter(WidgetRef ref) {\n  ref.read(counterProvider.state).state++;\n}",
                "imageUrl": "https://images.ui8.net/uploads/full-preview-1_1725799823019.jpg",
                "heading": "Example of Riverpod",
                "lang": "dart",
                "_id": "6714a6120c261d2ae529bfbf"
            },
            {
                "contentType": "heading",
                "content": "Conclusion",
                "_id": "6714a6120c261d2ae529bfc0"
            },
            {
                "contentType": "pg",
                "content": "Choosing the right state management solution can greatly influence your development experience and application performance.",
                "_id": "6714a6120c261d2ae529bfc1"
            }
        ],
        "author": "Andre",
        "tags": [
            "Flutter",
            "State Management",
            "Provider",
            "Riverpod"
        ],
        "image": "https://images.ui8.net/uploads/full-preview-1_1725799823019.jpg",
        "related": [
            {
                "title": "Flutter State Management",
                "relatedID": "6713b8267c241aa444180ee9",
                "url": "6713b8267c241aa444180ee9",
                "imageUrl": "https://images.ui8.net/uploads/full-preview-1_1725799823019.jpg",
                "_id": "6714a6120c261d2ae529bfc2"
            },
            {
                "title": "Flutter Navigation Techniques",
                "relatedID": "6713b8267c241aa444180ee9",
                "url": "6713b8267c241aa444180ee9",
                "imageUrl": "https://images.ui8.net/uploads/full-preview-1_1725799823019.jpg",
                "_id": "6714a6120c261d2ae529bfc3"
            }
        ],
        "headlines": "Explore various state management solutions to enhance your Flutter applications.",
        "repo": "https://github.com/yourusername/flutter_state_management",
        "suggestedCourses": [
            {
                "title": "Flutter Development Bootcamp",
                "relatedID": "6713b8267c241aa444180ee9",
                "url": "https://example.com/course/flutter-development",
                "imageUrl": "https://images.ui8.net/uploads/full-preview-1_1725799823019.jpg",
                "_id": "6714a6120c261d2ae529bfc4"
            },
            {
                "title": "Advanced Flutter Techniques",
                "relatedID": "6713b8267c241aa444180ee9",
                "url": "https://example.com/course/flutter-advanced",
                "imageUrl": "https://images.ui8.net/uploads/full-preview-1_1725799823019.jpg",
                "_id": "6714a6120c261d2ae529bfc5"
            }
        ],
        "email": "andre@horizondevelopers.co.za",
        "website": "www.horizondevelopers.co.za",
        "date": "2024-10-20T06:41:22.019Z",
        "createdAt": "2024-10-20T06:41:22.037Z",
        "updatedAt": "2024-10-20T06:41:22.037Z",
        "__v": 0,
        "seo": "building_responsive_uis_in_flutter"
    },
    {
        "id": "6714a7000c261d2ae529bfc8",
        "title": "Creating a Multi-Module Django App",
        "content": [
            {
                "contentType": "heading",
                "content": "Introduction",
                "_id": "6714a7000c261d2ae529bfc9"
            },
            {
                "contentType": "pg",
                "content": "In this article, we will explore how to create a multi-module Django application. We will cover the environment setup, project structure, and implementation of modules.",
                "_id": "6714a7000c261d2ae529bfca"
            },
            {
                "contentType": "heading",
                "content": "Setting Up the Environment",
                "_id": "6714a7000c261d2ae529bfcb"
            },
            {
                "contentType": "pg",
                "content": "To get started, ensure you have Python and Django installed. We will also use virtual environments for better project isolation.",
                "_id": "6714a7000c261d2ae529bfcc"
            },
            {
                "contentType": "code",
                "content": "python -m venv myenv\nsource myenv/bin/activate\npip install django",
                "heading": "Create and Activate Virtual Environment",
                "lang": "bash",
                "_id": "6714a7000c261d2ae529bfcd"
            },
            {
                "contentType": "heading",
                "content": "Creating the Django Project",
                "_id": "6714a7000c261d2ae529bfce"
            },
            {
                "contentType": "pg",
                "content": "Once the environment is set up, create a new Django project using the following command.",
                "_id": "6714a7000c261d2ae529bfcf"
            },
            {
                "contentType": "code",
                "content": "django-admin startproject myproject",
                "heading": "Create Project",
                "lang": "bash",
                "_id": "6714a7000c261d2ae529bfd0"
            },
            {
                "contentType": "heading",
                "content": "Project Structure",
                "_id": "6714a7000c261d2ae529bfd1"
            },
            {
                "contentType": "pg",
                "content": "The basic structure of your Django project will look like this:\n\n- myproject/\n  - myproject/\n  - module1/\n  - module2/\n  - manage.py",
                "_id": "6714a7000c261d2ae529bfd2"
            },
            {
                "contentType": "heading",
                "content": "Creating Modules",
                "_id": "6714a7000c261d2ae529bfd3"
            },
            {
                "contentType": "pg",
                "content": "Now, let’s create our first module. Use the following command to create an app within your project.",
                "_id": "6714a7000c261d2ae529bfd4"
            },
            {
                "contentType": "code",
                "content": "python manage.py startapp module1",
                "heading": "Create Module 1",
                "lang": "bash",
                "_id": "6714a7000c261d2ae529bfd5"
            },
            {
                "contentType": "pg",
                "content": "Repeat the process for additional modules as needed.",
                "_id": "6714a7000c261d2ae529bfd6"
            },
            {
                "contentType": "heading",
                "content": "Configuring Installed Apps",
                "_id": "6714a7000c261d2ae529bfd7"
            },
            {
                "contentType": "pg",
                "content": "After creating modules, you need to register them in your settings file. Open `settings.py` and add your modules to the `INSTALLED_APPS` list.",
                "_id": "6714a7000c261d2ae529bfd8"
            },
            {
                "contentType": "code",
                "content": "INSTALLED_APPS = [\n    'django.contrib.admin',\n    'django.contrib.auth',\n    'django.contrib.contenttypes',\n    'django.contrib.sessions',\n    'django.contrib.messages',\n    'django.contrib.staticfiles',\n    'module1',\n    'module2',\n]",
                "heading": "Update settings.py",
                "lang": "python",
                "_id": "6714a7000c261d2ae529bfd9"
            },
            {
                "contentType": "heading",
                "content": "Defining Models",
                "_id": "6714a7000c261d2ae529bfda"
            },
            {
                "contentType": "pg",
                "content": "In each module, define your models in `models.py`. For example, in `module1/models.py`, you could define a simple model like this:",
                "_id": "6714a7000c261d2ae529bfdb"
            },
            {
                "contentType": "code",
                "content": "from django.db import models\n\nclass Item(models.Model):\n    name = models.CharField(max_length=100)\n    description = models.TextField()",
                "heading": "Define a Model in module1",
                "lang": "python",
                "_id": "6714a7000c261d2ae529bfdc"
            },
            {
                "contentType": "heading",
                "content": "Running Migrations",
                "_id": "6714a7000c261d2ae529bfdd"
            },
            {
                "contentType": "pg",
                "content": "After defining your models, run migrations to create the corresponding database tables.",
                "_id": "6714a7000c261d2ae529bfde"
            },
            {
                "contentType": "code",
                "content": "python manage.py makemigrations\npython manage.py migrate",
                "heading": "Run Migrations",
                "lang": "bash",
                "_id": "6714a7000c261d2ae529bfdf"
            },
            {
                "contentType": "heading",
                "content": "Creating Views and URLs",
                "_id": "6714a7000c261d2ae529bfe0"
            },
            {
                "contentType": "pg",
                "content": "Next, create views in `module1/views.py` and map them to URLs in `module1/urls.py`.",
                "_id": "6714a7000c261d2ae529bfe1"
            },
            {
                "contentType": "code",
                "content": "from django.http import HttpResponse\n\ndef home(request):\n    return HttpResponse('Hello from Module 1')",
                "heading": "Create a View in module1",
                "lang": "python",
                "_id": "6714a7000c261d2ae529bfe2"
            },
            {
                "contentType": "heading",
                "content": "Configuring URLs",
                "_id": "6714a7000c261d2ae529bfe3"
            },
            {
                "contentType": "pg",
                "content": "Now, include your module URLs in the main project’s `urls.py`.",
                "_id": "6714a7000c261d2ae529bfe4"
            },
            {
                "contentType": "code",
                "content": "from django.urls import path, include\n\nurlpatterns = [\n    path('module1/', include('module1.urls')),\n]",
                "heading": "Update Main urls.py",
                "lang": "python",
                "_id": "6714a7000c261d2ae529bfe5"
            },
            {
                "contentType": "heading",
                "content": "Running the Server",
                "_id": "6714a7000c261d2ae529bfe6"
            },
            {
                "contentType": "pg",
                "content": "Finally, start the development server to see your app in action.",
                "_id": "6714a7000c261d2ae529bfe7"
            },
            {
                "contentType": "code",
                "content": "python manage.py runserver",
                "heading": "Start the Development Server",
                "lang": "bash",
                "_id": "6714a7000c261d2ae529bfe8"
            },
            {
                "contentType": "heading",
                "content": "Conclusion",
                "_id": "6714a7000c261d2ae529bfe9"
            },
            {
                "contentType": "pg",
                "content": "In this article, we've covered how to set up a multi-module Django application, including environment setup, project structure, and basic implementation of modules.",
                "_id": "6714a7000c261d2ae529bfea"
            }
        ],
        "author": "Your Name",
        "tags": [
            "Django",
            "Web Development",
            "Multi-Module",
            "Python"
        ],
        "image": "https://images.ui8.net/uploads/full-preview-1_1725799823019.jpg",
        "related": [
            {
                "title": "Django REST Framework: A Beginner's Guide",
                "relatedID": "6713b8267c241aa444180ee9",
                "url": "6713b8267c241aa444180ee9",
                "imageUrl": "https://images.ui8.net/uploads/full-preview-1_1725799823019.jpg",
                "_id": "6714a7000c261d2ae529bfeb"
            },
            {
                "title": "Understanding Django Models",
                "relatedID": "6713b8267c241aa444180ee9",
                "url": "6713b8267c241aa444180ee9",
                "imageUrl": "https://images.ui8.net/uploads/full-preview-1_1725799823019.jpg",
                "_id": "6714a7000c261d2ae529bfec"
            }
        ],
        "headlines": "Learn how to create a multi-module Django application from scratch.",
        "repo": "https://github.com/yourusername/multi_module_django_app",
        "suggestedCourses": [
            {
                "title": "Django Development Bootcamp",
                "relatedID": "6713b8267c241aa444180ee9",
                "url": "https://example.com/course/django-development",
                "imageUrl": "https://images.ui8.net/uploads/full-preview-1_1725799823019.jpg",
                "_id": "6714a7000c261d2ae529bfed"
            },
            {
                "title": "Advanced Django Techniques",
                "relatedID": "6713b8267c241aa444180ee9",
                "url": "https://example.com/course/advanced-django",
                "imageUrl": "https://images.ui8.net/uploads/full-preview-1_1725799823019.jpg",
                "_id": "6714a7000c261d2ae529bfee"
            }
        ],
        "email": "andre@horizondevelopers.co.za",
        "website": "www.horizondevelopers.co.za",
        "date": "2024-10-20T06:45:20.753Z",
        "createdAt": "2024-10-20T06:45:20.767Z",
        "updatedAt": "2024-10-20T06:45:20.767Z",
        "__v": 0,
        "seo": "state_management_in_flutter_with_provider"
    }
]