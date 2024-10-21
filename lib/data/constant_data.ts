

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
        "author": "Andre",
        "tags": [
            "Flutter",
            "Responsive UI",
            "Layout",
            "MediaQuery"
        ],
        "image": "https://images.ui8.net/uploads/full-preview-1_1725799823019.jpg",
        "headlines": "Master responsive design techniques in Flutter for a better user experience.",
        "date": "2024-10-20T05:29:07.542Z"
    },
    {
        "id": "6714a6120c261d2ae529bfb3",
        "title": "State Management in Flutter: An Overview",
        "author": "Andre",
        "tags": [
            "Flutter",
            "State Management",
            "Provider",
            "Riverpod"
        ],
        "image": "https://images.ui8.net/uploads/full-preview-1_1725799823019.jpg",
        "headlines": "Explore various state management solutions to enhance your Flutter applications.",
        "date": "2024-10-20T06:41:22.019Z"
    },
    {
        "id": "6714a7000c261d2ae529bfc8",
        "title": "Creating a Multi-Module Django App",
        "author": "Your Name",
        "tags": [
            "Django",
            "Web Development",
            "Multi-Module",
            "Python"
        ],
        "image": "https://images.ui8.net/uploads/full-preview-1_1725799823019.jpg",
        "headlines": "Learn how to create a multi-module Django application from scratch.",
        "date": "2024-10-20T06:45:20.753Z"
    }
]