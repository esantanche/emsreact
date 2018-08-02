# Services framework

Here we use React Service Injector.

More about it here:
https://github.com/EfogDev/react-services-injector#readme

The model has React components accessing backend resources through
services defined in this folder.

Services may be used as well to provide functions and information
to components that are not retrieved from the backend.

All services have to be declared in the file services.js for them
to be available to the entire application.

In App.js services are registered.

Components that want to use services need to use the injector function.
You see it at the bottom of any component file that uses services.

