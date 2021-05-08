const MODULE_NAME = "better-spell-slots";

Hooks.on("renderTidy5eSheet", (app, html, data) => {
    console.log(data.actor);
    console.log(app);
    console.log(html);
    console.log("Tidy5e Sheet rendered!");
});