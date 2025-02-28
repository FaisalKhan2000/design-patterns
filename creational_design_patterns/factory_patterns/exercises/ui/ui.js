// Abstract factory
class UIFactory {
  createButton() {}
  createInputField() {}
  createTooltip() {}
}

// Concrete factories
class LightThemeFactory extends UIFactory {
  createButton() {
    return new LightThemeButton();
  }
  createInputField() {
    return new LightThemeInputField();
  }
  createTooltip() {
    return new LightThemeTooltip();
  }
}

class DarkThemeFactory extends UIFactory {
  createButton() {
    return new DarkThemeButton();
  }
  createInputField() {
    return new DarkThemeInputField();
  }
  createTooltip() {
    return new DarkThemeTooltip();
  }
}

// Abstract products
class Button {
  render() {}
}
class InputField {
  render() {}
}
class Tooltip {
  render() {}
}

// Concrete products - Light Theme
class LightThemeButton extends Button {
  render() {
    console.log("Rendering light theme button with white background");
  }
}

class LightThemeInputField extends InputField {
  render() {
    console.log("Rendering light theme input field with gray border");
  }
}

class LightThemeTooltip extends Tooltip {
  render() {
    console.log("Rendering light theme tooltip with dark text");
  }
}

// Concrete products - Dark Theme
class DarkThemeButton extends Button {
  render() {
    console.log("Rendering dark theme button with black background");
  }
}

class DarkThemeInputField extends InputField {
  render() {
    console.log("Rendering dark theme input field with white border");
  }
}

class DarkThemeTooltip extends Tooltip {
  render() {
    console.log("Rendering dark theme tooltip with light text");
  }
}

// Client usage
function createUI(factory) {
  const button = factory.createButton();
  const input = factory.createInputField();
  const tooltip = factory.createTooltip();

  button.render();
  input.render();
  tooltip.render();
}

// Example usage
const lightUI = new LightThemeFactory();
const darkUI = new DarkThemeFactory();

console.log("Creating Light Theme UI:");
createUI(lightUI);

console.log("\nCreating Dark Theme UI:");
createUI(darkUI);
