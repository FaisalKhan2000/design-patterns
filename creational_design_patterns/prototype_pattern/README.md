# Prototype Pattern Implementation

## Overview

The Prototype pattern allows you to create new objects by cloning an existing object, known as the prototype. This pattern is useful when:

- Object creation is expensive
- You need to create objects similar to existing ones
- You want to reduce the number of classes in your system

## Implementation Details

### Document (Base Prototype)

- Serves as the base prototype class
- Implements basic cloning functionality
- Maintains common document properties (title, content, metadata)

### Concrete Prototypes

1. **Article**

   - Extends Document
   - Adds author and tags support
   - Custom clone implementation for deep copying tags

2. **Template**
   - Extends Document
   - Adds category and usage tracking
   - Resets usage count on cloning

### DocumentRegistry

- Manages prototype instances
- Provides centralized access to prototypes
- Handles prototype registration and cloning

## Usage Example
