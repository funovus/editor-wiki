## Deprecation Policy

DreamEditor is constantly evolving with weekly releases and new features. From time to time, we may deprecate older Trigger APIs or data properties to make room for better solutions in new editor releases. When this happens, you'll see a popup when opening a project that uses a trigger API or data properties marked for deprecation. This popup will let you know which deprecated APIs/properties are in use, where they're used in your project, and what solutions are available to replace them. You can also manually scan a project for deprecated features through **Tools > Scan for deprecated APIs**.

Under most cases, deprecated trigger APIs can be automatically updated with their replacement APIs through **Tools > Auto-fix deprecated trigger APIs**. For deprecated data properties, we may add similar auto-fix utilities under the **Tools** menu, depending on the nature and complexity of the issue.

Deprecated APIs and properties are typically removed from the editor after **30 days** of the deprecation change. You must replace any deprecated APIs or properties used in your project by this time so your project will work with future editor versions.

> ![](https://user-images.githubusercontent.com/56179276/114254589-28315380-9965-11eb-8a79-5ffde8b28616.png)
