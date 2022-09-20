---

layout: home
---

DynamiaTools is a framework for building Java 11+ web applications fast and easy using standard design patterns, views
descriptors for automatic UI generation, actions, services and modules. Powered by **Spring Boot** (https://spring.io), ZK
9 (https://www.zkoss.org) for web UI and JPA 2.

## With DynamiaTools you can

- Create fully functional web applications without too much knowledge about Web Development.
- Write modular applications. Yes, you could create a module (jar file)  and reuse it.
- It helps you to keep your project DRY.
- Automatic CRUD views
- Automatic REST endpoints for CRUD operations.
- Extends the framework with new modules, actions and services.
- Use HTML5 in your application thanks to ZK framework, this means you can use Bootstrap, CSS 3, and many HTML5
  technologies
- Customize your application with themes or templates.
- Use MVC or MVVM
- Integrate with other Java framework
- Much more.

## Powered by the best

- **Spring** framework for integration, REST and infrastructure.
- **Spring Boot** for easy setup and deploy
- **ZK** framework for web user interfaces 
- Standard **JPA** for default persistence layer. 
- **Jackson** for JSON/XML serialization 
- **YAML** for view descriptors

## Common design patterns
- Model View Controller (MVC)
- Model View ViewModel (MVVM)
- Modules, services and actions
- Events oriented programming

## Installation

- Create a new SpringBoot project using https://start.spring.io
- Select Web, JPA and programing language for your spring app
- Optional select another framework or jdbc driver your need
- Download and import it in your IDE
- Add DynamiaTools dependencies
- Enable DynamiaTools in you application

```java
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import tools.dynamia.zk.app.EnableDynamiaTools;

@SpringBootApplication
@EnableDynamiaTools // <- this is all you need
class MyApplication {

    public static void main(String[] args) {
        SpringApplication.run(MyApplication.class, args);
    }

}
```

- Run
- Done!

**Maven**

```xml

<dependencies>   
    <dependency>
        <groupId>tools.dynamia</groupId>
        <artifactId>tools.dynamia.zk.app</artifactId>
        <version>4.1.0</version>
    </dependency>

    <dependency>
        <groupId>tools.dynamia</groupId>
        <artifactId>tools.dynamia.domain.jpa</artifactId>
        <version>4.1.0</version>
    </dependency>    
</dependencies>
```

**Gradle**

```groovy
compile 'tools.dynamia:tools.dynamia.zk.app:4.1.0'
compile 'tools.dynamia:tools.dynamia.domain.jpa:4.1.0'
```

