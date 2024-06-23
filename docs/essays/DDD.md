<!--
 * @Author: Hong.Zhang
 * @Date: 2024-06-23 19:50:29
 * @Description: 
-->
# Domain-Driven Design

## Concepts

> Domain-Driven Design (DDD) is a software development concept and method, with its core idea of closely integrating the design and implementation of solutions around the business domain. DDD emphasizes close collaboration with domain experts, using a shared language to model and solve complex business problems.

The main contents of Domain-Driven Design are as follows:

1. Domain
   Domain refers to the problem domain or a set of related business logic. The domain includes all business-related knowledge and activities.

2. Bounded Context
   Bounded Context is the boundary of an application with consistent behavior and independent deployment. Each Bounded Context has its own independent model and logic, and interactions between Bounded Contexts are through explicit interfaces.

3. Ubiquitous Language
   Ubiquitous Language is a shared language between the development team and domain experts. It is applied in all models and documents during design and discussions, ensuring that everyone uses the same terms and concepts in communication to avoid ambiguity.

4. Entity
   An entity is an object with a unique identifier, and its identity does not change throughout its lifecycle. It is usually used to represent business objects with independent meaning.

5. Value Object
   A value object is an object without a unique identifier, used to represent descriptive characteristics. Value objects are typically immutable, and equality between two value objects is based on the equality of all their properties.

6. Aggregate
   An aggregate is a collection of one or more entities and value objects that are treated as a whole. It has an aggregate root, and external access and operations on objects within the aggregate are only through the aggregate root.

7. Domain Service
   A domain service is stateless business logic that is not part of any entity or value object but has significant roles in business logic. It is typically used to handle business operations involving multiple entities or value objects.

8. Factory
   A factory is a design pattern used to create complex objects, especially useful for creating entities or value objects with complex initialization steps. A factory can ensure consistency and complexity in the creation process.

9. Repository
   A repository is used to persist and retrieve aggregate objects. It simulates a collection, allowing clients to add, delete, and retrieve aggregate roots.

10. Domain Event
    A domain event is a significant and meaningful change that occurs in the domain model. Through domain events, loose coupling between domain objects can be achieved.

11. Application Service
    An application service is located in the application layer and is responsible for handling user commands and application logic, excluding domain logic. Application services typically invoke domain services, manage transactions, and coordinate interactions with external systems.

## Examples

Suppose you are developing an e-commerce system, you can consider the application of DDD as follows:

- Domain: E-commerce.
- Bounded Contexts: Order context, Payment context, Product context, etc.
- Ubiquitous Language: Determine unified terms with business experts, such as "shopping cart," "order," "payment," etc.
- Entities: Order, User, etc.
- Value Objects: Address, Money, etc.
- Aggregate: The order aggregate may contain an order and all its order items.
- Domain Service: A service to calculate the total price of an order.
- Factory: A factory to create order objects.
- Repository: Order repository for persisting and retrieving orders.
- Domain Event: Order created event, Order paid event, etc.
- Application Service: Order placement service, responsible for receiving user requests and invoking domain services to process business logic.

Through DDD, we can align the code with the business, improving the maintainability and comprehensibility of the system, thus better addressing complex business requirements.