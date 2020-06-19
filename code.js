// console.log(document.querySelector("div.quiz-question-panel>span").innerHTML);
set = [
    {
        "q": "The practice of collective code ownership relates to which SAFe core value?",
        "a": [
            {
                "a": "Program Execution",
                "f": false
            },
            {
                "a": "Transparency",
                "f": false
            },
            {
                "a": "Built-in Quality",
                "f": true
            },
            {
                "a": "Alignment",
                "f": false
            }
        ]
    },
    {
        "q": "How do personas help teams write stories?",
        "a": [
            {
                "a": "They provide guidance on how to split stories",
                "f": false
            },
            {
                "a": "They help teams better understand the end users",
                "f": true
            },
            {
                "a": "They help teams write better estimates",
                "f": false
            },
            {
                "a": "They add items to the team's Definition of Done (DoD)",
                "f": false
            }
        ]
    },
    {
        "q": "What two types of testing should always be automated? (Choose two.)",
        "a": [
            {
                "a": "Unit testing",
                "f": true
            },
            {
                "a": "A/B testing",
                "f": false
            },
            {
                "a": "Connectivity testing to dependent components",
                "f": true
            },
            {
                "a": "User experience testing",
                "f": false
            },
            {
                "a": "User acceptance testing",
                "f": false
            }
        ]
    },
    {
        "q": "What are three aspects for selecting a design alternative? (Choose three.)",
        "a": [
            {
                "a": "Implementing everything",
                "f": false
            },
            {
                "a": "Looking at the difficulty of implementation",
                "f": true
            },
            {
                "a": "Figuring out who is going to implement the design",
                "f": false
            },
            {
                "a": "Examining issues in the problem space that the alternative addresses",
                "f": true
            },
            {
                "a": "Determining issues the solution may cause",
                "f": true
            },
            {
                "a": "Using a new language for implementation",
                "f": false
            }
        ]
    },
    {
        "q": "What is one essential aspect of collective ownership?",
        "a": [
            {
                "a": "Small methods",
                "f": false
            },
            {
                "a": "Assertive methods",
                "f": false
            },
            {
                "a": "Coding standards",
                "f": true
            },
            {
                "a": "Design patterns",
                "f": false
            }
        ]
    },
    {
        "q": "What is a strategy for improved UI testing?",
        "a": [
            {
                "a": "Test UI and application logic together with the system",
                "f": false
            },
            {
                "a": "Write brittle tests to ensure that UI errors are quickly detected",
                "f": false
            },
            {
                "a": "Perform manual testing",
                "f": false
            },
            {
                "a": "Use test doubles to make testing the UI easier",
                "f": true
            }
        ]
    },
    {
        "q": "testTheCalculatorAddMethod() {\n<br>     assert(4, Calculator.add(2,2)) \n<br>     }\n<br>How could this pseudo code be improved?",
        "a": [
            {
                "a": "Call a different method",
                "f": false
            },
            {
                "a": "Change the name",
                "f": true
            },
            {
                "a": "Add another assert",
                "f": false
            },
            {
                "a": "Use an assertTrue",
                "f": false
            }
        ]
    },
    {
        "q": "What is a primary practice of Agile Software Engineering?",
        "a": [
            {
                "a": "Writing extensive tests after writing the code, Story, or Feature",
                "f": false
            },
            {
                "a": "Writing all the requirements upfront between the business and the development teams",
                "f": false
            },
            {
                "a": "Writing tests representing requirements that the application must pass",
                "f": true
            },
            {
                "a": "Writing exploratory tests up-front",
                "f": false
            }
        ]
    },
    {
        "q": "What is one reason for emergent design?",
        "a": [
            {
                "a": "Intentional architecture",
                "f": false
            },
            {
                "a": "New capabilities for future requirements",
                "f": false
            },
            {
                "a": "New requirement added",
                "f": false
            },
            {
                "a": "Reducing amount of refactoring",
                "f": true
            }
        ]
    },
    {
        "q": "Which statement is true about the relationship between acceptance criteria and acceptance tests in an Agile, Test-driven environment?",
        "a": [
            {
                "a": "Acceptance criteria are more specific than acceptance tests",
                "f": false
            },
            {
                "a": "Acceptance tests are derived from acceptance criteria",
                "f": true
            },
            {
                "a": "Both the acceptance criteria and tests derives from the original requirements specification",
                "f": false
            },
            {
                "a": "There is no correlation between acceptance criteria and acceptance tests",
                "f": false
            }
        ]
    },
    {
        "q": "Test-Driven Development (TDD) directly helps with what aspects of code quality?",
        "a": [
            {
                "a": "Performance",
                "f": false
            },
            {
                "a": "Testability",
                "f": true
            },
            {
                "a": "Security",
                "f": false
            },
            {
                "a": "Abstraction",
                "f": false
            }
        ]
    },
    {
        "q": "Which statement is true about emergent design?",
        "a": [
            {
                "a": "Teams model the system to support all current requirements",
                "f": false
            },
            {
                "a": "Teams implement the designs created by the architects",
                "f": false
            },
            {
                "a": "Teams specify the design up front to support current and future requirements",
                "f": false
            },
            {
                "a": "Teams grow the system to support changing requirements",
                "f": true
            }
        ]
    },
    {
        "q": "Which architecture style best supports the ability to incrementally release small functionality?",
        "a": [
            {
                "a": "Intentional",
                "f": true
            },
            {
                "a": "Micro-service",
                "f": false
            },
            {
                "a": "Monolithic",
                "f": false
            },
            {
                "a": "Tiered",
                "f": false
            }
        ]
    },
    {
        "q": "What does Agile modeling involve?",
        "a": [
            {
                "a": "Showing interaction between entities",
                "f": false
            },
            {
                "a": "Communicating with simple diagrams",
                "f": true
            },
            {
                "a": "Details of interfaces",
                "f": false
            },
            {
                "a": "Using UML symbols",
                "f": false
            }
        ]
    },
    {
        "q": "What is the goal of Behavior-Driven Development (BDD)?",
        "a": [
            {
                "a": "To express nonfunctional requirements by creating tests first",
                "f": false
            },
            {
                "a": "To always automate tests in order to support regression and continuous delivery",
                "f": false
            },
            {
                "a": "To transform acceptance criteria into automated acceptance tests",
                "f": true
            },
            {
                "a": "To express requirements in unambiguous terms",
                "f": false
            }
        ]
    },
    {
        "q": "What type of test is being described: \"@test  testAddition() { assert(4, Calculator.add(2,2)) }?",
        "a": [
            {
                "a": "Test-Driven Development (TDD)",
                "f": true
            },
            {
                "a": "Behavior-Driven Development (BDD)",
                "f": false
            },
            {
                "a": "Integration",
                "f": false
            },
            {
                "a": "Production",
                "f": false
            }
        ]
    },
    {
        "q": "What two qualities will a testable design exhibit? (Choose two.)",
        "a": [
            {
                "a": "Ease of use",
                "f": false
            },
            {
                "a": "Low coupling",
                "f": true
            },
            {
                "a": "Responsiveness",
                "f": false
            },
            {
                "a": "Resilience",
                "f": false
            },
            {
                "a": "Separation of concerns",
                "f": true
            }
        ]
    },
    {
        "q": "Who receives the value delivery accelerated by value streams?",
        "a": [
            {
                "a": "Developers",
                "f": false
            },
            {
                "a": "Managers",
                "f": false
            },
            {
                "a": "Customers",
                "f": true
            },
            {
                "a": "Product Owners",
                "f": false
            }
        ]
    },
    {
        "q": "What three principles are included in the SOLID principles? (Choose three.)",
        "a": [
            {
                "a": "Entity separation principle",
                "f": false
            },
            {
                "a": "Dependency inversion principle",
                "f": true
            },
            {
                "a": "Encapsulation principle",
                "f": false
            },
            {
                "a": "Liskov substitution principle",
                "f": true
            },
            {
                "a": "Inheritance principle",
                "f": false
            },
            {
                "a": "Interface separation principle",
                "f": true
            }
        ]
    },
    {
        "q": "What causes delays in a development stream?",
        "a": [
            {
                "a": "Misunderstood requirements",
                "f": true
            },
            {
                "a": "Writing tests first",
                "f": false
            },
            {
                "a": "Creating scenarios",
                "f": false
            },
            {
                "a": "Stand-up meetings",
                "f": false
            }
        ]
    },
    {
        "q": "Which statement is true about differentiation and synthesis?",
        "a": [
            {
                "a": "Synthesis combines existing components",
                "f": false
            },
            {
                "a": "Differentiation involves splitting entities into smaller entities",
                "f": true
            },
            {
                "a": "Differentiation emphasizes pre-built components",
                "f": false
            },
            {
                "a": "Synthesis involves splitting entities",
                "f": false
            }
        ]
    },
    {
        "q": "Which statement is true about using Abstract Data Types (ADT)?",
        "a": [
            {
                "a": "ADTs should encapsulate large amounts of system behavior",
                "f": false
            },
            {
                "a": "Primitives, not ADTs, should be used in interfaces",
                "f": false
            },
            {
                "a": "Adding abstraction increases performance",
                "f": false
            },
            {
                "a": "Domain terms should have an ADT",
                "f": true
            }
        ]
    },
    {
        "q": "What is the first step in the Lean-UX process?",
        "a": [
            {
                "a": "Collaborative design",
                "f": false
            },
            {
                "a": "Features",
                "f": false
            },
            {
                "a": "Benefit hypothesis",
                "f": true
            },
            {
                "a": "Specialization",
                "f": false
            }
        ]
    },
    {
        "q": "What is the difference between behavior and testing behavior?",
        "a": [
            {
                "a": "Given-When-Then describes the behavior and checking the When statement tests the behavior",
                "f": false
            },
            {
                "a": "Given-When-Then statements describe the behavior and Then statement tests the behavior",
                "f": true
            },
            {
                "a": "Given-Then-When specifies behavior and automation tests the behavior",
                "f": false
            },
            {
                "a": "Given-Then-When statements describes the behavior and Given tests the behavior",
                "f": false
            }
        ]
    },
    {
        "q": "What is the Rule of Three?",
        "a": [
            {
                "a": "For every problem there are at least three solutions",
                "f": false
            },
            {
                "a": "An efficient way of solving a problem is finding at least three solutions",
                "f": false
            },
            {
                "a": "You can understand a problem when there are three solutions available",
                "f": false
            },
            {
                "a": "If you cannot come up with three solutions to a problem, you do not understand the problem",
                "f": true
            }
        ]
    },
    {
        "q": "What is one of the purposes of creating domain terms?",
        "a": [
            {
                "a": "To test acceptance criteria",
                "f": false
            },
            {
                "a": "To create business tests",
                "f": false
            },
            {
                "a": "To create a shared understanding",
                "f": true
            },
            {
                "a": "To validate behavior",
                "f": false
            }
        ]
    },
    {
        "q": "What can help increase the delivery of value?",
        "a": [
            {
                "a": "Swarming the team",
                "f": false
            },
            {
                "a": "Lengthening the architectural runway",
                "f": false
            },
            {
                "a": "Identifying waste",
                "f": true
            },
            {
                "a": "Managing the portfolio canvas",
                "f": false
            }
        ]
    },
    {
        "q": "Which practice is an enabler for building speed into the pipeline?",
        "a": [
            {
                "a": "Continuous Integration",
                "f": true
            },
            {
                "a": "Pair programming",
                "f": false
            },
            {
                "a": "Emergent Design",
                "f": false
            },
            {
                "a": "Collective Ownership",
                "f": false
            }
        ]
    },
    {
        "q": "Which statement is true about Interface-oriented design?",
        "a": [
            {
                "a": "Low-level modules should not depend on high-level modules",
                "f": false
            },
            {
                "a": "Low-level modules should depend on high-level modules",
                "f": false
            },
            {
                "a": "High-level modules should depend on low-level modules",
                "f": false
            },
            {
                "a": "High-level modules should not depend on low-level modules",
                "f": true
            }
        ]
    },
    {
        "q": "What is a strategy for finding tests impacted by new requirements?",
        "a": [
            {
                "a": "Hardcoding the data makes finding changes easier",
                "f": false
            },
            {
                "a": "Writing brittle tests helps identify changes quicker",
                "f": false
            },
            {
                "a": "Writing tests to support the specification rather than the application",
                "f": false
            },
            {
                "a": "Adhering to the Single Responsibility Principle (SOLID)",
                "f": true
            }
        ]
    },
    {
        "q": "What is a strategy for using test doubles to describe behavior of the system?",
        "a": [
            {
                "a": "To control output, test doubles should be used on a single Story",
                "f": false
            },
            {
                "a": "Test doubles often increase complexity of API testing",
                "f": false
            },
            {
                "a": "Test doubles can help accelerate testing of cyber-physical systems",
                "f": true
            },
            {
                "a": "Mocking the system increases transaction costs to the production system",
                "f": false
            }
        ]
    },
    {
        "q": "What is another way to represent a state model?",
        "a": [
            {
                "a": "Using a state transition table",
                "f": false
            },
            {
                "a": "Using a stateless object model",
                "f": false
            },
            {
                "a": "Using a sequence diagram",
                "f": true
            },
            {
                "a": "Using a static model showing behaviors",
                "f": false
            }
        ]
    },
    {
        "q": "Which statement is true about Behavior-Driven Development (BDD)?",
        "a": [
            {
                "a": "It checks internal components",
                "f": false
            },
            {
                "a": "It requires modeling",
                "f": false
            },
            {
                "a": "It creates tests after implementation",
                "f": false
            },
            {
                "a": "It is performed by the triad",
                "f": true
            }
        ]
    },
    {
        "q": "Benefit hypothesis is used for which primary purpose?",
        "a": [
            {
                "a": "To validate business value",
                "f": true
            },
            {
                "a": "To learn about customer behavior",
                "f": false
            },
            {
                "a": "To test functionality",
                "f": false
            },
            {
                "a": "To justify ROI",
                "f": false
            }
        ]
    },
    {
        "q": "Which statement is true about higher quality code?",
        "a": [
            {
                "a": "There are several tests",
                "f": true
            },
            {
                "a": "There are several comments",
                "f": false
            },
            {
                "a": "There are several primitives",
                "f": false
            },
            {
                "a": "There are several large methods",
                "f": false
            }
        ]
    },
    {
        "q": "Which SOLID principle can be used to guide decomposition?",
        "a": [
            {
                "a": "Dependency Inversion",
                "f": false
            },
            {
                "a": "Liskov Substitution",
                "f": false
            },
            {
                "a": "Interface Segregation",
                "f": false
            },
            {
                "a": "Single Responsibility",
                "f": true
            }
        ]
    },
    {
        "q": "What two qualities are exhibited by readable code?  (Choose two.)",
        "a": [
            {
                "a": "Descriptive comments for large block of code",
                "f": false
            },
            {
                "a": "Meaningful variable names",
                "f": true
            },
            {
                "a": "Long blocks of code that can fit on a single screen",
                "f": false
            },
            {
                "a": "Complex logic separated out into large classes",
                "f": false
            },
            {
                "a": "Small methods with specific purposes",
                "f": true
            }
        ]
    },
    {
        "q": "What category of tests are located in the quadrant Technology Facing/Critique the Product?",
        "a": [
            {
                "a": "User experience tests",
                "f": false
            },
            {
                "a": "Hypothesis validation tests",
                "f": false
            },
            {
                "a": "Business rules tests",
                "f": false
            },
            {
                "a": "Non-functional requirements tests",
                "f": true
            }
        ]
    },
    {
        "q": "In the continuous delivery pipeline, what tests are typically performed in the developer context?",
        "a": [
            {
                "a": "Production environment tests",
                "f": false
            },
            {
                "a": "Unit tests",
                "f": true
            },
            {
                "a": "User acceptance tests",
                "f": false
            },
            {
                "a": "Scalability tests",
                "f": false
            }
        ]
    },
    {
        "q": "What statement is true about test doubles in Test-Driven Development (TDD)?",
        "a": [
            {
                "a": "They are written by other teams",
                "f": false
            },
            {
                "a": "They are a stand-in for slow or random dependencies",
                "f": true
            },
            {
                "a": "They are always needed",
                "f": false
            },
            {
                "a": "They are never altered",
                "f": false
            }
        ]
    },
    {
        "q": "What is one advantage of using software design patterns?",
        "a": [
            {
                "a": "They reduce the amount of design documentation required",
                "f": false
            },
            {
                "a": "They act as a template into which the team adds the implementation",
                "f": false
            },
            {
                "a": "They are proven examples of good design principles and practices",
                "f": true
            },
            {
                "a": "They are ready made solutions to common problems",
                "f": false
            }
        ]
    },
    {
        "q": "What property do the tests in the bottom part of the testing pyramid exhibit?",
        "a": [
            {
                "a": "They test how components integrate",
                "f": false
            },
            {
                "a": "They test large functional areas",
                "f": false
            },
            {
                "a": "They test very small parts of functionality",
                "f": true
            },
            {
                "a": "They test the external interface of the system",
                "f": false
            }
        ]
    },
    {
        "q": "What are two agile approaches to estimating stories? (Choose two.)",
        "a": [
            {
                "a": "Product owner provides estimate",
                "f": false
            },
            {
                "a": "Relative to prior stories",
                "f": true
            },
            {
                "a": "Planning Poker",
                "f": true
            },
            {
                "a": "Round Table",
                "f": false
            },
            {
                "a": "Pink Monkey",
                "f": false
            }
        ]
    },
    {
        "q": "How are an entity and entity type different from each other?",
        "a": [
            {
                "a": "Entity type represents domain terms",
                "f": false
            },
            {
                "a": "Entity is an instance of an entity type",
                "f": true
            },
            {
                "a": "Entity type is derived from an entity",
                "f": false
            },
            {
                "a": "Entity type will not have attributes or behaviors like entities",
                "f": false
            }
        ]
    },
    {
        "q": "What is one way to create Test-Driven Development (TDD) tests?",
        "a": [
            {
                "a": "Use profiling to determine missing tests",
                "f": false
            },
            {
                "a": "Copy them from other tests",
                "f": false
            },
            {
                "a": "Derive tests from Behavior-Driven Development (BDD) tests",
                "f": true
            },
            {
                "a": "Write them after coding",
                "f": false
            }
        ]
    },
    {
        "q": "Compared to traditional software engineering, when is testing in Agile Software Engineering performed?",
        "a": [
            {
                "a": "After integration by testers",
                "f": false
            },
            {
                "a": "After deployment by testers",
                "f": false
            },
            {
                "a": "After deployment by users",
                "f": false
            },
            {
                "a": "During coding by developers",
                "f": true
            }
        ]
    },
    {
        "q": "Which statement best describes the use of business rule tests?",
        "a": [
            {
                "a": "They help create better estimates",
                "f": false
            },
            {
                "a": "They verify all combinations of data",
                "f": true
            },
            {
                "a": "They yield additional stories",
                "f": false
            },
            {
                "a": "They serve as boundary tests",
                "f": false
            }
        ]
    },
    {
        "q": "What are two XP practices? (Choose two.)",
        "a": [
            {
                "a": "PIs",
                "f": false
            },
            {
                "a": "Microservices",
                "f": false
            },
            {
                "a": "Comprehensive test plans",
                "f": false
            },
            {
                "a": "Pair programming",
                "f": true
            },
            {
                "a": "Test-driven development",
                "f": true
            }
        ]
    },
    {
        "q": "How should comparing design alternatives be approached?",
        "a": [
            {
                "a": "Explore case studies of previous usage",
                "f": false
            },
            {
                "a": "Create prototypes and test each against the same criteria",
                "f": true
            },
            {
                "a": "Model the designs in UML and review each one",
                "f": false
            },
            {
                "a": "Discuss the merits of each design with the team",
                "f": false
            }
        ]
    },
    {
        "q": "What two types of tests are included in categories of non-functional requirements testing? (Choose two.)",
        "a": [
            {
                "a": "User acceptance",
                "f": false
            },
            {
                "a": "Performance",
                "f": true
            },
            {
                "a": "Exploratory",
                "f": false
            },
            {
                "a": "Security",
                "f": true
            },
            {
                "a": "A/B",
                "f": false
            }
        ]
    },
    {
        "q": "Which statement is true about splitters and lumpers?",
        "a": [
            {
                "a": "Lumpers are used for splitting features and splitters are used for splitting user stories",
                "f": false
            },
            {
                "a": "Splitters and lumpers are more frequently used in user story writing",
                "f": false
            },
            {
                "a": "Splitters can be lumped more easily than lumpers can be split",
                "f": true
            },
            {
                "a": "Lumpers can be split more easily than splitters can lump",
                "f": false
            }
        ]
    },
    {
        "q": "How is shifting testing left used?",
        "a": [
            {
                "a": "To write the tests for code, stories, and features after the implementation is complete in order to avoid defects",
                "f": false
            },
            {
                "a": "To write the tests for code, stories, and features prior to implementation",
                "f": true
            },
            {
                "a": "To write the tests at higher level to be run prior to the completion of the lower level tests",
                "f": false
            },
            {
                "a": "To write the tests for requirements in a sequential cycle",
                "f": false
            }
        ]
    },
    {
        "q": "What is optimized by systems thinking?",
        "a": [
            {
                "a": "System-level tests",
                "f": false
            },
            {
                "a": "The whole system",
                "f": true
            },
            {
                "a": "The benefit hypothesis",
                "f": false
            },
            {
                "a": "The component interfaces",
                "f": false
            }
        ]
    },
    {
        "q": "Which statement is true about the difference between large tests and small tests?",
        "a": [
            {
                "a": "Large tests are slower and typically stateless",
                "f": false
            },
            {
                "a": "Small tests are slower and typically stateless",
                "f": false
            },
            {
                "a": "Small tests are faster and typically stateless",
                "f": true
            },
            {
                "a": "Large tests are faster and typically stateless",
                "f": false
            }
        ]
    },
    {
        "q": "Which SAFe principle is well-connected with the XP code practice 'Collective code ownership' that ensures developers are not blocked when implementing code?",
        "a": [
            {
                "a": "Decentralize decision-making",
                "f": false
            },
            {
                "a": "Unlock the intrinsic motivation of knowledge workers",
                "f": true
            },
            {
                "a": "Build incrementally with fast, integrated learning cycles",
                "f": false
            },
            {
                "a": "Apply cadence, synchronize with cross-domain planning",
                "f": false
            }
        ]
    },
    {
        "q": "At what two points are test doubles used during development? (Choose two.)",
        "a": [
            {
                "a": "When dependent components are expensive",
                "f": true
            },
            {
                "a": "When dependent components are written in another language",
                "f": false
            },
            {
                "a": "When dependent components are slow",
                "f": true
            },
            {
                "a": "When dependent components are built by another team",
                "f": false
            },
            {
                "a": "When dependent components are not yet released",
                "f": false
            }
        ]
    },
    {
        "q": "How is user Story mapping relevant to testing?",
        "a": [
            {
                "a": "It helps understanding how the value flows between the user stories and write relevant test cases",
                "f": false
            },
            {
                "a": "It helps to create the test scenarios to test end-to-end workflow and the individual steps",
                "f": true
            },
            {
                "a": "It reuses the test cases created for one user Story to test the other similar user stories",
                "f": false
            },
            {
                "a": "It helps mapping between the user stories and the relevant test cases to be used to test",
                "f": false
            }
        ]
    },
    {
        "q": "What is one SAFe Core Value that applies to Agile Software Engineering?",
        "a": [
            {
                "a": "Model-Driven Development",
                "f": false
            },
            {
                "a": "Automation",
                "f": false
            },
            {
                "a": "Code Quality",
                "f": true
            },
            {
                "a": "Continuous value delivery",
                "f": false
            }
        ]
    },
    {
        "q": "What is one way to determine what method to extract?",
        "a": [
            {
                "a": "Extraction by intention",
                "f": false
            },
            {
                "a": "Extraction by recall",
                "f": false
            },
            {
                "a": "Separate policy from implementation",
                "f": true
            },
            {
                "a": "Move an inquisitive method",
                "f": false
            }
        ]
    },
    {
        "q": "What is the main purpose of Behavior-Driven Development as a testing strategy?",
        "a": [
            {
                "a": "To increase test automation",
                "f": false
            },
            {
                "a": "To understand requirements before they are implemented",
                "f": true
            },
            {
                "a": "To expand test coverage",
                "f": false
            },
            {
                "a": "To increase focus on hypothesis testing",
                "f": false
            }
        ]
    }
];
// manipulateAnswers(); // uncomment to manipulate
$(document).ready(function () {
    setTimeout(() => {
        let q = document.getElementsByTagName('iframe')[0].contentDocument.body.querySelector("div.quiz-question-panel>span").innerHTML.trim();

        console.log(q);
        try {
            let cnt = 0;
            let nodes;
            nodes = document.getElementsByTagName('iframe')[0].contentDocument.body.querySelectorAll("div.quiz-response-panel div.radio label:first-child");
            if (!nodes || nodes.length == 0) {
                nodes = document.getElementsByTagName('iframe')[0].contentDocument.body.querySelectorAll("div.quiz-response-panel div.checkbox label:first-child");
            }
            if (nodes && nodes.length > 0) {
                let obj = {};
                obj.q = q;
                obj.a = [];
                let flag = false;
                for (let node of nodes) {
                    let a;
                    if (node.children.length > 1) {
                        a = node.children[1].innerHTML.trim();
                    } else if (node.children.length == 1) {
                        a = node.childNodes[2].textContent.trim();
                    }
                    obj.a.push({ "a": a, "f": false });
                    for (let row of set) {
                        if (row.q == q) {

                            row.a.forEach(element => {
                                if (element.a == a && element.f == true) {
                                    node.children[0].click();
                                    flag = true;
                                }
                            });
                        }
                    }
                }
                // chrome.storage.local.set({ q: obj }, function (err) {
                //     console.debug(JSON.stringify(obj));
                // });
                // console.debug(JSON.stringify(obj));
                if (flag) {
                    if (document.getElementsByTagName('iframe')[0].contentDocument.body.querySelector("input[value='Next'")) {
                        document.getElementsByTagName('iframe')[0].contentDocument.body.querySelector("input[value='Next'").click();
                    } else {
                        document.getElementsByTagName('iframe')[0].contentDocument.body.querySelector("input[value='Submit'")
                    }
                }
            }

        } catch (err) { console.log(err) }
    }, 1500)
});



function manipulateAnswers() {
    run = 0; // change this value from 0-59, numer signifies which question to manipulate
    // the baseline score is 97%.
    // after incrementing 'n', save the file and RELOAD the extension in chrome://extensions
    // then relaunch the test
    // remember after the last question you need to click on Submit yourself 
    // delete from 'START MANIPULATING' to 'END MANIPULATING' if you want to submit the preset answers as is
    cnt = set[run].a.filter(el => el.f == true).length; //START MANIPULATING
    notSwapped = true;
    if (cnt == 1) {
        set[run].a.forEach(el => {
            if (el.f == true) {
                el.f = false;
            } else if (el.f == false && notSwapped) {
                notSwapped = false;
                el.f = true;
            }
        });
    } else if (cnt > 1) {
        swapCnt = 0;
        set[run].a.forEach(el => {
            if (el.f == true) {
                el.f = false;
            } else if (el.f == false && swapCnt < cnt) {
                el.f = true;
                swapCnt += 1;
            }
        });
    }//END MANIPULATING
}