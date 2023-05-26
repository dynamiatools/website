---

layout: page
---

## first project

dynamia tools offers you multiple functionalities to implement in your project, in the following example we will show how to make a simple form with dynamia tools in a simple way

1. create the entity, we can create the entity using the SimpleEntity and BaseEntity classes, BaseEntity

```java
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;
import tools.dynamia.commons.InstanceName;
import tools.dynamia.domain.Descriptor;
import tools.dynamia.domain.jpa.SimpleEntity;

@Entity
@Table(name = "categorias")
public class CategoriaTecnico extends SimpleEntity {

    @NotNull
    @InstanceName
    private String nombre;

    @Override
    public String toString() {
        return nombre;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
}
```

SimpleEntity and BaseEntity fulfill the same functionality, which is to automatically create fields such as id, remoteId. the difference is that BaseEntity generates more fields for you than SimpleEntity

2.create @Provider class to generate a crud module
```java
import tools.dynamia.crud.CrudPage;
import tools.dynamia.integration.sterotypes.Provider;
import tools.dynamia.navigation.Module;
import tools.dynamia.navigation.ModuleProvider;

@Provider
public class ModuloMantenimientoInstaller implements ModuleProvider {
    public Module getModule() {
        Module mod = new Module("mantenimientos", "Mantenimientos");//here the module is created
        mod.addPage(new CrudPage("CategoriaTecnico", "CategoriaTecnico", CategoriaTecnico.class));//here the crud page of our class is created
        return mod;
    }
}
```

3.we generate the view in our yml file for our Entity class
```java
view: crud
beanClass: "path of our Category class"
```
- Run
- Done!
