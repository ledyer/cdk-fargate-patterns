# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BaseFargateService <a name="BaseFargateService" id="cdk-fargate-patterns.BaseFargateService"></a>

#### Initializers <a name="Initializers" id="cdk-fargate-patterns.BaseFargateService.Initializer"></a>

```typescript
import { BaseFargateService } from 'cdk-fargate-patterns'

new BaseFargateService(scope: Construct, id: string, props: BaseFargateServiceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-fargate-patterns.BaseFargateService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-fargate-patterns.BaseFargateService.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-fargate-patterns.BaseFargateService.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-fargate-patterns.BaseFargateServiceProps">BaseFargateServiceProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-fargate-patterns.BaseFargateService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-fargate-patterns.BaseFargateService.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-fargate-patterns.BaseFargateService.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-fargate-patterns.BaseFargateServiceProps">BaseFargateServiceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-fargate-patterns.BaseFargateService.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-fargate-patterns.BaseFargateService.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-fargate-patterns.BaseFargateService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-fargate-patterns.BaseFargateService.isConstruct"></a>

```typescript
import { BaseFargateService } from 'cdk-fargate-patterns'

BaseFargateService.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-fargate-patterns.BaseFargateService.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-fargate-patterns.BaseFargateService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-fargate-patterns.BaseFargateService.property.service">service</a></code> | <code>aws-cdk-lib.aws_ecs.FargateService[]</code> | The service(s) created from the task(s). |
| <code><a href="#cdk-fargate-patterns.BaseFargateService.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The VPC. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-fargate-patterns.BaseFargateService.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `service`<sup>Required</sup> <a name="service" id="cdk-fargate-patterns.BaseFargateService.property.service"></a>

```typescript
public readonly service: FargateService[];
```

- *Type:* aws-cdk-lib.aws_ecs.FargateService[]

The service(s) created from the task(s).

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="cdk-fargate-patterns.BaseFargateService.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

The VPC.

---


### Database <a name="Database" id="cdk-fargate-patterns.Database"></a>

Represents the database instance or database cluster.

#### Initializers <a name="Initializers" id="cdk-fargate-patterns.Database.Initializer"></a>

```typescript
import { Database } from 'cdk-fargate-patterns'

new Database(scope: Construct, id: string, props: DatabaseProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-fargate-patterns.Database.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-fargate-patterns.Database.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-fargate-patterns.Database.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-fargate-patterns.DatabaseProps">DatabaseProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-fargate-patterns.Database.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-fargate-patterns.Database.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-fargate-patterns.Database.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-fargate-patterns.DatabaseProps">DatabaseProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-fargate-patterns.Database.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-fargate-patterns.Database.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-fargate-patterns.Database.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-fargate-patterns.Database.isConstruct"></a>

```typescript
import { Database } from 'cdk-fargate-patterns'

Database.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-fargate-patterns.Database.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-fargate-patterns.Database.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-fargate-patterns.Database.property.clusterEndpointHostname">clusterEndpointHostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-fargate-patterns.Database.property.clusterIdentifier">clusterIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-fargate-patterns.Database.property.connections">connections</a></code> | <code>aws-cdk-lib.aws_ec2.Connections</code> | *No description.* |
| <code><a href="#cdk-fargate-patterns.Database.property.secret">secret</a></code> | <code>aws-cdk-lib.aws_secretsmanager.ISecret</code> | *No description.* |
| <code><a href="#cdk-fargate-patterns.Database.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-fargate-patterns.Database.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `clusterEndpointHostname`<sup>Required</sup> <a name="clusterEndpointHostname" id="cdk-fargate-patterns.Database.property.clusterEndpointHostname"></a>

```typescript
public readonly clusterEndpointHostname: string;
```

- *Type:* string

---

##### `clusterIdentifier`<sup>Required</sup> <a name="clusterIdentifier" id="cdk-fargate-patterns.Database.property.clusterIdentifier"></a>

```typescript
public readonly clusterIdentifier: string;
```

- *Type:* string

---

##### `connections`<sup>Required</sup> <a name="connections" id="cdk-fargate-patterns.Database.property.connections"></a>

```typescript
public readonly connections: Connections;
```

- *Type:* aws-cdk-lib.aws_ec2.Connections

---

##### `secret`<sup>Required</sup> <a name="secret" id="cdk-fargate-patterns.Database.property.secret"></a>

```typescript
public readonly secret: ISecret;
```

- *Type:* aws-cdk-lib.aws_secretsmanager.ISecret

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="cdk-fargate-patterns.Database.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

---


### DualAlbFargateService <a name="DualAlbFargateService" id="cdk-fargate-patterns.DualAlbFargateService"></a>

#### Initializers <a name="Initializers" id="cdk-fargate-patterns.DualAlbFargateService.Initializer"></a>

```typescript
import { DualAlbFargateService } from 'cdk-fargate-patterns'

new DualAlbFargateService(scope: Construct, id: string, props: DualAlbFargateServiceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-fargate-patterns.DualAlbFargateService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-fargate-patterns.DualAlbFargateService.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-fargate-patterns.DualAlbFargateService.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-fargate-patterns.DualAlbFargateServiceProps">DualAlbFargateServiceProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-fargate-patterns.DualAlbFargateService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-fargate-patterns.DualAlbFargateService.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-fargate-patterns.DualAlbFargateService.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-fargate-patterns.DualAlbFargateServiceProps">DualAlbFargateServiceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-fargate-patterns.DualAlbFargateService.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-fargate-patterns.DualAlbFargateService.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-fargate-patterns.DualAlbFargateService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-fargate-patterns.DualAlbFargateService.isConstruct"></a>

```typescript
import { DualAlbFargateService } from 'cdk-fargate-patterns'

DualAlbFargateService.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-fargate-patterns.DualAlbFargateService.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-fargate-patterns.DualAlbFargateService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-fargate-patterns.DualAlbFargateService.property.service">service</a></code> | <code>aws-cdk-lib.aws_ecs.FargateService[]</code> | The service(s) created from the task(s). |
| <code><a href="#cdk-fargate-patterns.DualAlbFargateService.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The VPC. |
| <code><a href="#cdk-fargate-patterns.DualAlbFargateService.property.externalAlb">externalAlb</a></code> | <code>aws-cdk-lib.aws_elasticloadbalancingv2.ApplicationLoadBalancer</code> | The external ALB. |
| <code><a href="#cdk-fargate-patterns.DualAlbFargateService.property.internalAlb">internalAlb</a></code> | <code>aws-cdk-lib.aws_elasticloadbalancingv2.ApplicationLoadBalancer</code> | The internal ALB. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-fargate-patterns.DualAlbFargateService.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `service`<sup>Required</sup> <a name="service" id="cdk-fargate-patterns.DualAlbFargateService.property.service"></a>

```typescript
public readonly service: FargateService[];
```

- *Type:* aws-cdk-lib.aws_ecs.FargateService[]

The service(s) created from the task(s).

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="cdk-fargate-patterns.DualAlbFargateService.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

The VPC.

---

##### `externalAlb`<sup>Optional</sup> <a name="externalAlb" id="cdk-fargate-patterns.DualAlbFargateService.property.externalAlb"></a>

```typescript
public readonly externalAlb: ApplicationLoadBalancer;
```

- *Type:* aws-cdk-lib.aws_elasticloadbalancingv2.ApplicationLoadBalancer

The external ALB.

---

##### `internalAlb`<sup>Optional</sup> <a name="internalAlb" id="cdk-fargate-patterns.DualAlbFargateService.property.internalAlb"></a>

```typescript
public readonly internalAlb: ApplicationLoadBalancer;
```

- *Type:* aws-cdk-lib.aws_elasticloadbalancingv2.ApplicationLoadBalancer

The internal ALB.

---


### DualNlbFargateService <a name="DualNlbFargateService" id="cdk-fargate-patterns.DualNlbFargateService"></a>

#### Initializers <a name="Initializers" id="cdk-fargate-patterns.DualNlbFargateService.Initializer"></a>

```typescript
import { DualNlbFargateService } from 'cdk-fargate-patterns'

new DualNlbFargateService(scope: Construct, id: string, props: DualNlbFargateServiceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-fargate-patterns.DualNlbFargateService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-fargate-patterns.DualNlbFargateService.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-fargate-patterns.DualNlbFargateService.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-fargate-patterns.DualNlbFargateServiceProps">DualNlbFargateServiceProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-fargate-patterns.DualNlbFargateService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-fargate-patterns.DualNlbFargateService.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-fargate-patterns.DualNlbFargateService.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-fargate-patterns.DualNlbFargateServiceProps">DualNlbFargateServiceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-fargate-patterns.DualNlbFargateService.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-fargate-patterns.DualNlbFargateService.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-fargate-patterns.DualNlbFargateService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-fargate-patterns.DualNlbFargateService.isConstruct"></a>

```typescript
import { DualNlbFargateService } from 'cdk-fargate-patterns'

DualNlbFargateService.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-fargate-patterns.DualNlbFargateService.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-fargate-patterns.DualNlbFargateService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-fargate-patterns.DualNlbFargateService.property.service">service</a></code> | <code>aws-cdk-lib.aws_ecs.FargateService[]</code> | The service(s) created from the task(s). |
| <code><a href="#cdk-fargate-patterns.DualNlbFargateService.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The VPC. |
| <code><a href="#cdk-fargate-patterns.DualNlbFargateService.property.externalNlb">externalNlb</a></code> | <code>aws-cdk-lib.aws_elasticloadbalancingv2.NetworkLoadBalancer</code> | The external Nlb. |
| <code><a href="#cdk-fargate-patterns.DualNlbFargateService.property.internalNlb">internalNlb</a></code> | <code>aws-cdk-lib.aws_elasticloadbalancingv2.NetworkLoadBalancer</code> | The internal Nlb. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-fargate-patterns.DualNlbFargateService.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `service`<sup>Required</sup> <a name="service" id="cdk-fargate-patterns.DualNlbFargateService.property.service"></a>

```typescript
public readonly service: FargateService[];
```

- *Type:* aws-cdk-lib.aws_ecs.FargateService[]

The service(s) created from the task(s).

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="cdk-fargate-patterns.DualNlbFargateService.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

The VPC.

---

##### `externalNlb`<sup>Optional</sup> <a name="externalNlb" id="cdk-fargate-patterns.DualNlbFargateService.property.externalNlb"></a>

```typescript
public readonly externalNlb: NetworkLoadBalancer;
```

- *Type:* aws-cdk-lib.aws_elasticloadbalancingv2.NetworkLoadBalancer

The external Nlb.

---

##### `internalNlb`<sup>Optional</sup> <a name="internalNlb" id="cdk-fargate-patterns.DualNlbFargateService.property.internalNlb"></a>

```typescript
public readonly internalNlb: NetworkLoadBalancer;
```

- *Type:* aws-cdk-lib.aws_elasticloadbalancingv2.NetworkLoadBalancer

The internal Nlb.

---


### Laravel <a name="Laravel" id="cdk-fargate-patterns.Laravel"></a>

Represents the Laravel service.

#### Initializers <a name="Initializers" id="cdk-fargate-patterns.Laravel.Initializer"></a>

```typescript
import { Laravel } from 'cdk-fargate-patterns'

new Laravel(scope: Construct, id: string, props: LaravelProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-fargate-patterns.Laravel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-fargate-patterns.Laravel.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-fargate-patterns.Laravel.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-fargate-patterns.LaravelProps">LaravelProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-fargate-patterns.Laravel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-fargate-patterns.Laravel.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-fargate-patterns.Laravel.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-fargate-patterns.LaravelProps">LaravelProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-fargate-patterns.Laravel.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-fargate-patterns.Laravel.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-fargate-patterns.Laravel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-fargate-patterns.Laravel.isConstruct"></a>

```typescript
import { Laravel } from 'cdk-fargate-patterns'

Laravel.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-fargate-patterns.Laravel.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-fargate-patterns.Laravel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-fargate-patterns.Laravel.property.svc">svc</a></code> | <code><a href="#cdk-fargate-patterns.DualAlbFargateService">DualAlbFargateService</a></code> | *No description.* |
| <code><a href="#cdk-fargate-patterns.Laravel.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | *No description.* |
| <code><a href="#cdk-fargate-patterns.Laravel.property.db">db</a></code> | <code><a href="#cdk-fargate-patterns.Database">Database</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-fargate-patterns.Laravel.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `svc`<sup>Required</sup> <a name="svc" id="cdk-fargate-patterns.Laravel.property.svc"></a>

```typescript
public readonly svc: DualAlbFargateService;
```

- *Type:* <a href="#cdk-fargate-patterns.DualAlbFargateService">DualAlbFargateService</a>

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="cdk-fargate-patterns.Laravel.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

---

##### `db`<sup>Optional</sup> <a name="db" id="cdk-fargate-patterns.Laravel.property.db"></a>

```typescript
public readonly db: Database;
```

- *Type:* <a href="#cdk-fargate-patterns.Database">Database</a>

---


### WordPress <a name="WordPress" id="cdk-fargate-patterns.WordPress"></a>

#### Initializers <a name="Initializers" id="cdk-fargate-patterns.WordPress.Initializer"></a>

```typescript
import { WordPress } from 'cdk-fargate-patterns'

new WordPress(scope: Construct, id: string, props?: WordPressProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-fargate-patterns.WordPress.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-fargate-patterns.WordPress.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-fargate-patterns.WordPress.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-fargate-patterns.WordPressProps">WordPressProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-fargate-patterns.WordPress.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-fargate-patterns.WordPress.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="cdk-fargate-patterns.WordPress.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-fargate-patterns.WordPressProps">WordPressProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-fargate-patterns.WordPress.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-fargate-patterns.WordPress.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-fargate-patterns.WordPress.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-fargate-patterns.WordPress.isConstruct"></a>

```typescript
import { WordPress } from 'cdk-fargate-patterns'

WordPress.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-fargate-patterns.WordPress.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-fargate-patterns.WordPress.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-fargate-patterns.WordPress.property.svc">svc</a></code> | <code><a href="#cdk-fargate-patterns.DualAlbFargateService">DualAlbFargateService</a></code> | *No description.* |
| <code><a href="#cdk-fargate-patterns.WordPress.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | *No description.* |
| <code><a href="#cdk-fargate-patterns.WordPress.property.db">db</a></code> | <code><a href="#cdk-fargate-patterns.Database">Database</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-fargate-patterns.WordPress.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `svc`<sup>Required</sup> <a name="svc" id="cdk-fargate-patterns.WordPress.property.svc"></a>

```typescript
public readonly svc: DualAlbFargateService;
```

- *Type:* <a href="#cdk-fargate-patterns.DualAlbFargateService">DualAlbFargateService</a>

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="cdk-fargate-patterns.WordPress.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

---

##### `db`<sup>Optional</sup> <a name="db" id="cdk-fargate-patterns.WordPress.property.db"></a>

```typescript
public readonly db: Database;
```

- *Type:* <a href="#cdk-fargate-patterns.Database">Database</a>

---


## Structs <a name="Structs" id="Structs"></a>

### BaseFargateServiceProps <a name="BaseFargateServiceProps" id="cdk-fargate-patterns.BaseFargateServiceProps"></a>

#### Initializer <a name="Initializer" id="cdk-fargate-patterns.BaseFargateServiceProps.Initializer"></a>

```typescript
import { BaseFargateServiceProps } from 'cdk-fargate-patterns'

const baseFargateServiceProps: BaseFargateServiceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-fargate-patterns.BaseFargateServiceProps.property.tasks">tasks</a></code> | <code><a href="#cdk-fargate-patterns.FargateTaskProps">FargateTaskProps</a>[]</code> | *No description.* |
| <code><a href="#cdk-fargate-patterns.BaseFargateServiceProps.property.circuitBreaker">circuitBreaker</a></code> | <code>boolean</code> | Enable the ECS service circuit breaker. |
| <code><a href="#cdk-fargate-patterns.BaseFargateServiceProps.property.cluster">cluster</a></code> | <code>aws-cdk-lib.aws_ecs.ICluster</code> | Use existing ECS Cluster. |
| <code><a href="#cdk-fargate-patterns.BaseFargateServiceProps.property.clusterProps">clusterProps</a></code> | <code>aws-cdk-lib.aws_ecs.ClusterProps</code> | The properties used to define an ECS cluster. |
| <code><a href="#cdk-fargate-patterns.BaseFargateServiceProps.property.enableExecuteCommand">enableExecuteCommand</a></code> | <code>boolean</code> | Whether to enable ECS Exec support. |
| <code><a href="#cdk-fargate-patterns.BaseFargateServiceProps.property.route53Ops">route53Ops</a></code> | <code><a href="#cdk-fargate-patterns.Route53Options">Route53Options</a></code> | *No description.* |
| <code><a href="#cdk-fargate-patterns.BaseFargateServiceProps.property.spot">spot</a></code> | <code>boolean</code> | create a FARGATE_SPOT only cluster. |
| <code><a href="#cdk-fargate-patterns.BaseFargateServiceProps.property.spotTerminationHandler">spotTerminationHandler</a></code> | <code>boolean</code> | Enable the fargate spot termination handler. |
| <code><a href="#cdk-fargate-patterns.BaseFargateServiceProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | *No description.* |
| <code><a href="#cdk-fargate-patterns.BaseFargateServiceProps.property.vpcSubnets">vpcSubnets</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | The subnets to associate with the service. |

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="cdk-fargate-patterns.BaseFargateServiceProps.property.tasks"></a>

```typescript
public readonly tasks: FargateTaskProps[];
```

- *Type:* <a href="#cdk-fargate-patterns.FargateTaskProps">FargateTaskProps</a>[]

---

##### `circuitBreaker`<sup>Optional</sup> <a name="circuitBreaker" id="cdk-fargate-patterns.BaseFargateServiceProps.property.circuitBreaker"></a>

```typescript
public readonly circuitBreaker: boolean;
```

- *Type:* boolean
- *Default:* true

Enable the ECS service circuit breaker.

> [- https://aws.amazon.com/tw/blogs/containers/announcing-amazon-ecs-deployment-circuit-breaker/](- https://aws.amazon.com/tw/blogs/containers/announcing-amazon-ecs-deployment-circuit-breaker/)

---

##### `cluster`<sup>Optional</sup> <a name="cluster" id="cdk-fargate-patterns.BaseFargateServiceProps.property.cluster"></a>

```typescript
public readonly cluster: ICluster;
```

- *Type:* aws-cdk-lib.aws_ecs.ICluster
- *Default:* create a new ECS Cluster.

Use existing ECS Cluster.

---

##### `clusterProps`<sup>Optional</sup> <a name="clusterProps" id="cdk-fargate-patterns.BaseFargateServiceProps.property.clusterProps"></a>

```typescript
public readonly clusterProps: ClusterProps;
```

- *Type:* aws-cdk-lib.aws_ecs.ClusterProps
- *Default:* Create vpc and enable Fargate Capacity Providers.

The properties used to define an ECS cluster.

---

##### `enableExecuteCommand`<sup>Optional</sup> <a name="enableExecuteCommand" id="cdk-fargate-patterns.BaseFargateServiceProps.property.enableExecuteCommand"></a>

```typescript
public readonly enableExecuteCommand: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable ECS Exec support.

> [https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-exec.html](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-exec.html)

---

##### `route53Ops`<sup>Optional</sup> <a name="route53Ops" id="cdk-fargate-patterns.BaseFargateServiceProps.property.route53Ops"></a>

```typescript
public readonly route53Ops: Route53Options;
```

- *Type:* <a href="#cdk-fargate-patterns.Route53Options">Route53Options</a>

---

##### `spot`<sup>Optional</sup> <a name="spot" id="cdk-fargate-patterns.BaseFargateServiceProps.property.spot"></a>

```typescript
public readonly spot: boolean;
```

- *Type:* boolean
- *Default:* false

create a FARGATE_SPOT only cluster.

---

##### `spotTerminationHandler`<sup>Optional</sup> <a name="spotTerminationHandler" id="cdk-fargate-patterns.BaseFargateServiceProps.property.spotTerminationHandler"></a>

```typescript
public readonly spotTerminationHandler: boolean;
```

- *Type:* boolean
- *Default:* true

Enable the fargate spot termination handler.

> [https://docs.aws.amazon.com/AmazonECS/latest/developerguide/fargate-capacity-providers.html#fargate-capacity-providers-termination](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/fargate-capacity-providers.html#fargate-capacity-providers-termination)

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="cdk-fargate-patterns.BaseFargateServiceProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

---

##### `vpcSubnets`<sup>Optional</sup> <a name="vpcSubnets" id="cdk-fargate-patterns.BaseFargateServiceProps.property.vpcSubnets"></a>

```typescript
public readonly vpcSubnets: SubnetSelection;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection
- *Default:* { subnetType: ec2.SubnetType.PRIVATE, }

The subnets to associate with the service.

---

### DatabaseCofig <a name="DatabaseCofig" id="cdk-fargate-patterns.DatabaseCofig"></a>

Database configuration.

#### Initializer <a name="Initializer" id="cdk-fargate-patterns.DatabaseCofig.Initializer"></a>

```typescript
import { DatabaseCofig } from 'cdk-fargate-patterns'

const databaseCofig: DatabaseCofig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-fargate-patterns.DatabaseCofig.property.connections">connections</a></code> | <code>aws-cdk-lib.aws_ec2.Connections</code> | The database connnections. |
| <code><a href="#cdk-fargate-patterns.DatabaseCofig.property.endpoint">endpoint</a></code> | <code>string</code> | The endpoint address for the database. |
| <code><a href="#cdk-fargate-patterns.DatabaseCofig.property.identifier">identifier</a></code> | <code>string</code> | The databasae identifier. |
| <code><a href="#cdk-fargate-patterns.DatabaseCofig.property.secret">secret</a></code> | <code>aws-cdk-lib.aws_secretsmanager.ISecret</code> | The database secret. |

---

##### `connections`<sup>Required</sup> <a name="connections" id="cdk-fargate-patterns.DatabaseCofig.property.connections"></a>

```typescript
public readonly connections: Connections;
```

- *Type:* aws-cdk-lib.aws_ec2.Connections

The database connnections.

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="cdk-fargate-patterns.DatabaseCofig.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

The endpoint address for the database.

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="cdk-fargate-patterns.DatabaseCofig.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

The databasae identifier.

---

##### `secret`<sup>Required</sup> <a name="secret" id="cdk-fargate-patterns.DatabaseCofig.property.secret"></a>

```typescript
public readonly secret: ISecret;
```

- *Type:* aws-cdk-lib.aws_secretsmanager.ISecret

The database secret.

---

### DatabaseProps <a name="DatabaseProps" id="cdk-fargate-patterns.DatabaseProps"></a>

#### Initializer <a name="Initializer" id="cdk-fargate-patterns.DatabaseProps.Initializer"></a>

```typescript
import { DatabaseProps } from 'cdk-fargate-patterns'

const databaseProps: DatabaseProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-fargate-patterns.DatabaseProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The VPC for the database. |
| <code><a href="#cdk-fargate-patterns.DatabaseProps.property.allowFrom">allowFrom</a></code> | <code>aws-cdk-lib.aws_ec2.IConnectable</code> | Allow database connection. |
| <code><a href="#cdk-fargate-patterns.DatabaseProps.property.auroraServerless">auroraServerless</a></code> | <code>boolean</code> | enable aurora serverless. |
| <code><a href="#cdk-fargate-patterns.DatabaseProps.property.backupRetention">backupRetention</a></code> | <code>aws-cdk-lib.Duration</code> | database backup retension. |
| <code><a href="#cdk-fargate-patterns.DatabaseProps.property.clusterEngine">clusterEngine</a></code> | <code>aws-cdk-lib.aws_rds.IClusterEngine</code> | The database cluster engine. |
| <code><a href="#cdk-fargate-patterns.DatabaseProps.property.databaseSubnets">databaseSubnets</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | VPC subnets for database. |
| <code><a href="#cdk-fargate-patterns.DatabaseProps.property.defaultDatabaseName">defaultDatabaseName</a></code> | <code>string</code> | Default database name to create. |
| <code><a href="#cdk-fargate-patterns.DatabaseProps.property.instanceEngine">instanceEngine</a></code> | <code>aws-cdk-lib.aws_rds.IInstanceEngine</code> | The database instance engine. |
| <code><a href="#cdk-fargate-patterns.DatabaseProps.property.instanceType">instanceType</a></code> | <code>aws-cdk-lib.aws_ec2.InstanceType</code> | The database instance type. |
| <code><a href="#cdk-fargate-patterns.DatabaseProps.property.singleDbInstance">singleDbInstance</a></code> | <code>boolean</code> | Whether to use single RDS instance rather than RDS cluster. |

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="cdk-fargate-patterns.DatabaseProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

The VPC for the database.

---

##### `allowFrom`<sup>Optional</sup> <a name="allowFrom" id="cdk-fargate-patterns.DatabaseProps.property.allowFrom"></a>

```typescript
public readonly allowFrom: IConnectable;
```

- *Type:* aws-cdk-lib.aws_ec2.IConnectable
- *Default:* the whole VPC CIDR

Allow database connection.

---

##### `auroraServerless`<sup>Optional</sup> <a name="auroraServerless" id="cdk-fargate-patterns.DatabaseProps.property.auroraServerless"></a>

```typescript
public readonly auroraServerless: boolean;
```

- *Type:* boolean
- *Default:* false

enable aurora serverless.

---

##### `backupRetention`<sup>Optional</sup> <a name="backupRetention" id="cdk-fargate-patterns.DatabaseProps.property.backupRetention"></a>

```typescript
public readonly backupRetention: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* 7 days

database backup retension.

---

##### `clusterEngine`<sup>Optional</sup> <a name="clusterEngine" id="cdk-fargate-patterns.DatabaseProps.property.clusterEngine"></a>

```typescript
public readonly clusterEngine: IClusterEngine;
```

- *Type:* aws-cdk-lib.aws_rds.IClusterEngine
- *Default:* rds.AuroraMysqlEngineVersion.VER_2_09_1

The database cluster engine.

---

##### `databaseSubnets`<sup>Optional</sup> <a name="databaseSubnets" id="cdk-fargate-patterns.DatabaseProps.property.databaseSubnets"></a>

```typescript
public readonly databaseSubnets: SubnetSelection;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection

VPC subnets for database.

---

##### `defaultDatabaseName`<sup>Optional</sup> <a name="defaultDatabaseName" id="cdk-fargate-patterns.DatabaseProps.property.defaultDatabaseName"></a>

```typescript
public readonly defaultDatabaseName: string;
```

- *Type:* string
- *Default:* do not create any default database

Default database name to create.

---

##### `instanceEngine`<sup>Optional</sup> <a name="instanceEngine" id="cdk-fargate-patterns.DatabaseProps.property.instanceEngine"></a>

```typescript
public readonly instanceEngine: IInstanceEngine;
```

- *Type:* aws-cdk-lib.aws_rds.IInstanceEngine
- *Default:* MySQL 8.0.21

The database instance engine.

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="cdk-fargate-patterns.DatabaseProps.property.instanceType"></a>

```typescript
public readonly instanceType: InstanceType;
```

- *Type:* aws-cdk-lib.aws_ec2.InstanceType
- *Default:* r5.large

The database instance type.

---

##### `singleDbInstance`<sup>Optional</sup> <a name="singleDbInstance" id="cdk-fargate-patterns.DatabaseProps.property.singleDbInstance"></a>

```typescript
public readonly singleDbInstance: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to use single RDS instance rather than RDS cluster.

Not recommended for production.

---

### DualAlbFargateServiceProps <a name="DualAlbFargateServiceProps" id="cdk-fargate-patterns.DualAlbFargateServiceProps"></a>

#### Initializer <a name="Initializer" id="cdk-fargate-patterns.DualAlbFargateServiceProps.Initializer"></a>

```typescript
import { DualAlbFargateServiceProps } from 'cdk-fargate-patterns'

const dualAlbFargateServiceProps: DualAlbFargateServiceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-fargate-patterns.DualAlbFargateServiceProps.property.tasks">tasks</a></code> | <code><a href="#cdk-fargate-patterns.FargateTaskProps">FargateTaskProps</a>[]</code> | *No description.* |
| <code><a href="#cdk-fargate-patterns.DualAlbFargateServiceProps.property.circuitBreaker">circuitBreaker</a></code> | <code>boolean</code> | Enable the ECS service circuit breaker. |
| <code><a href="#cdk-fargate-patterns.DualAlbFargateServiceProps.property.cluster">cluster</a></code> | <code>aws-cdk-lib.aws_ecs.ICluster</code> | Use existing ECS Cluster. |
| <code><a href="#cdk-fargate-patterns.DualAlbFargateServiceProps.property.clusterProps">clusterProps</a></code> | <code>aws-cdk-lib.aws_ecs.ClusterProps</code> | The properties used to define an ECS cluster. |
| <code><a href="#cdk-fargate-patterns.DualAlbFargateServiceProps.property.enableExecuteCommand">enableExecuteCommand</a></code> | <code>boolean</code> | Whether to enable ECS Exec support. |
| <code><a href="#cdk-fargate-patterns.DualAlbFargateServiceProps.property.route53Ops">route53Ops</a></code> | <code><a href="#cdk-fargate-patterns.Route53Options">Route53Options</a></code> | *No description.* |
| <code><a href="#cdk-fargate-patterns.DualAlbFargateServiceProps.property.spot">spot</a></code> | <code>boolean</code> | create a FARGATE_SPOT only cluster. |
| <code><a href="#cdk-fargate-patterns.DualAlbFargateServiceProps.property.spotTerminationHandler">spotTerminationHandler</a></code> | <code>boolean</code> | Enable the fargate spot termination handler. |
| <code><a href="#cdk-fargate-patterns.DualAlbFargateServiceProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | *No description.* |
| <code><a href="#cdk-fargate-patterns.DualAlbFargateServiceProps.property.vpcSubnets">vpcSubnets</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | The subnets to associate with the service. |
| <code><a href="#cdk-fargate-patterns.DualAlbFargateServiceProps.property.externalAlbIdleTimeout">externalAlbIdleTimeout</a></code> | <code>aws-cdk-lib.Duration</code> | The external load balancer idle timeout, in seconds. |
| <code><a href="#cdk-fargate-patterns.DualAlbFargateServiceProps.property.internalAlbIdleTimeout">internalAlbIdleTimeout</a></code> | <code>aws-cdk-lib.Duration</code> | The internal load balancer idle timeout, in seconds. |

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="cdk-fargate-patterns.DualAlbFargateServiceProps.property.tasks"></a>

```typescript
public readonly tasks: FargateTaskProps[];
```

- *Type:* <a href="#cdk-fargate-patterns.FargateTaskProps">FargateTaskProps</a>[]

---

##### `circuitBreaker`<sup>Optional</sup> <a name="circuitBreaker" id="cdk-fargate-patterns.DualAlbFargateServiceProps.property.circuitBreaker"></a>

```typescript
public readonly circuitBreaker: boolean;
```

- *Type:* boolean
- *Default:* true

Enable the ECS service circuit breaker.

> [- https://aws.amazon.com/tw/blogs/containers/announcing-amazon-ecs-deployment-circuit-breaker/](- https://aws.amazon.com/tw/blogs/containers/announcing-amazon-ecs-deployment-circuit-breaker/)

---

##### `cluster`<sup>Optional</sup> <a name="cluster" id="cdk-fargate-patterns.DualAlbFargateServiceProps.property.cluster"></a>

```typescript
public readonly cluster: ICluster;
```

- *Type:* aws-cdk-lib.aws_ecs.ICluster
- *Default:* create a new ECS Cluster.

Use existing ECS Cluster.

---

##### `clusterProps`<sup>Optional</sup> <a name="clusterProps" id="cdk-fargate-patterns.DualAlbFargateServiceProps.property.clusterProps"></a>

```typescript
public readonly clusterProps: ClusterProps;
```

- *Type:* aws-cdk-lib.aws_ecs.ClusterProps
- *Default:* Create vpc and enable Fargate Capacity Providers.

The properties used to define an ECS cluster.

---

##### `enableExecuteCommand`<sup>Optional</sup> <a name="enableExecuteCommand" id="cdk-fargate-patterns.DualAlbFargateServiceProps.property.enableExecuteCommand"></a>

```typescript
public readonly enableExecuteCommand: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable ECS Exec support.

> [https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-exec.html](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-exec.html)

---

##### `route53Ops`<sup>Optional</sup> <a name="route53Ops" id="cdk-fargate-patterns.DualAlbFargateServiceProps.property.route53Ops"></a>

```typescript
public readonly route53Ops: Route53Options;
```

- *Type:* <a href="#cdk-fargate-patterns.Route53Options">Route53Options</a>

---

##### `spot`<sup>Optional</sup> <a name="spot" id="cdk-fargate-patterns.DualAlbFargateServiceProps.property.spot"></a>

```typescript
public readonly spot: boolean;
```

- *Type:* boolean
- *Default:* false

create a FARGATE_SPOT only cluster.

---

##### `spotTerminationHandler`<sup>Optional</sup> <a name="spotTerminationHandler" id="cdk-fargate-patterns.DualAlbFargateServiceProps.property.spotTerminationHandler"></a>

```typescript
public readonly spotTerminationHandler: boolean;
```

- *Type:* boolean
- *Default:* true

Enable the fargate spot termination handler.

> [https://docs.aws.amazon.com/AmazonECS/latest/developerguide/fargate-capacity-providers.html#fargate-capacity-providers-termination](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/fargate-capacity-providers.html#fargate-capacity-providers-termination)

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="cdk-fargate-patterns.DualAlbFargateServiceProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

---

##### `vpcSubnets`<sup>Optional</sup> <a name="vpcSubnets" id="cdk-fargate-patterns.DualAlbFargateServiceProps.property.vpcSubnets"></a>

```typescript
public readonly vpcSubnets: SubnetSelection;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection
- *Default:* { subnetType: ec2.SubnetType.PRIVATE, }

The subnets to associate with the service.

---

##### `externalAlbIdleTimeout`<sup>Optional</sup> <a name="externalAlbIdleTimeout" id="cdk-fargate-patterns.DualAlbFargateServiceProps.property.externalAlbIdleTimeout"></a>

```typescript
public readonly externalAlbIdleTimeout: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* 60.

The external load balancer idle timeout, in seconds.

---

##### `internalAlbIdleTimeout`<sup>Optional</sup> <a name="internalAlbIdleTimeout" id="cdk-fargate-patterns.DualAlbFargateServiceProps.property.internalAlbIdleTimeout"></a>

```typescript
public readonly internalAlbIdleTimeout: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* 60.

The internal load balancer idle timeout, in seconds.

---

### DualNlbFargateServiceProps <a name="DualNlbFargateServiceProps" id="cdk-fargate-patterns.DualNlbFargateServiceProps"></a>

#### Initializer <a name="Initializer" id="cdk-fargate-patterns.DualNlbFargateServiceProps.Initializer"></a>

```typescript
import { DualNlbFargateServiceProps } from 'cdk-fargate-patterns'

const dualNlbFargateServiceProps: DualNlbFargateServiceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-fargate-patterns.DualNlbFargateServiceProps.property.tasks">tasks</a></code> | <code><a href="#cdk-fargate-patterns.FargateTaskProps">FargateTaskProps</a>[]</code> | *No description.* |
| <code><a href="#cdk-fargate-patterns.DualNlbFargateServiceProps.property.circuitBreaker">circuitBreaker</a></code> | <code>boolean</code> | Enable the ECS service circuit breaker. |
| <code><a href="#cdk-fargate-patterns.DualNlbFargateServiceProps.property.cluster">cluster</a></code> | <code>aws-cdk-lib.aws_ecs.ICluster</code> | Use existing ECS Cluster. |
| <code><a href="#cdk-fargate-patterns.DualNlbFargateServiceProps.property.clusterProps">clusterProps</a></code> | <code>aws-cdk-lib.aws_ecs.ClusterProps</code> | The properties used to define an ECS cluster. |
| <code><a href="#cdk-fargate-patterns.DualNlbFargateServiceProps.property.enableExecuteCommand">enableExecuteCommand</a></code> | <code>boolean</code> | Whether to enable ECS Exec support. |
| <code><a href="#cdk-fargate-patterns.DualNlbFargateServiceProps.property.route53Ops">route53Ops</a></code> | <code><a href="#cdk-fargate-patterns.Route53Options">Route53Options</a></code> | *No description.* |
| <code><a href="#cdk-fargate-patterns.DualNlbFargateServiceProps.property.spot">spot</a></code> | <code>boolean</code> | create a FARGATE_SPOT only cluster. |
| <code><a href="#cdk-fargate-patterns.DualNlbFargateServiceProps.property.spotTerminationHandler">spotTerminationHandler</a></code> | <code>boolean</code> | Enable the fargate spot termination handler. |
| <code><a href="#cdk-fargate-patterns.DualNlbFargateServiceProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | *No description.* |
| <code><a href="#cdk-fargate-patterns.DualNlbFargateServiceProps.property.vpcSubnets">vpcSubnets</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | The subnets to associate with the service. |

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="cdk-fargate-patterns.DualNlbFargateServiceProps.property.tasks"></a>

```typescript
public readonly tasks: FargateTaskProps[];
```

- *Type:* <a href="#cdk-fargate-patterns.FargateTaskProps">FargateTaskProps</a>[]

---

##### `circuitBreaker`<sup>Optional</sup> <a name="circuitBreaker" id="cdk-fargate-patterns.DualNlbFargateServiceProps.property.circuitBreaker"></a>

```typescript
public readonly circuitBreaker: boolean;
```

- *Type:* boolean
- *Default:* true

Enable the ECS service circuit breaker.

> [- https://aws.amazon.com/tw/blogs/containers/announcing-amazon-ecs-deployment-circuit-breaker/](- https://aws.amazon.com/tw/blogs/containers/announcing-amazon-ecs-deployment-circuit-breaker/)

---

##### `cluster`<sup>Optional</sup> <a name="cluster" id="cdk-fargate-patterns.DualNlbFargateServiceProps.property.cluster"></a>

```typescript
public readonly cluster: ICluster;
```

- *Type:* aws-cdk-lib.aws_ecs.ICluster
- *Default:* create a new ECS Cluster.

Use existing ECS Cluster.

---

##### `clusterProps`<sup>Optional</sup> <a name="clusterProps" id="cdk-fargate-patterns.DualNlbFargateServiceProps.property.clusterProps"></a>

```typescript
public readonly clusterProps: ClusterProps;
```

- *Type:* aws-cdk-lib.aws_ecs.ClusterProps
- *Default:* Create vpc and enable Fargate Capacity Providers.

The properties used to define an ECS cluster.

---

##### `enableExecuteCommand`<sup>Optional</sup> <a name="enableExecuteCommand" id="cdk-fargate-patterns.DualNlbFargateServiceProps.property.enableExecuteCommand"></a>

```typescript
public readonly enableExecuteCommand: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable ECS Exec support.

> [https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-exec.html](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-exec.html)

---

##### `route53Ops`<sup>Optional</sup> <a name="route53Ops" id="cdk-fargate-patterns.DualNlbFargateServiceProps.property.route53Ops"></a>

```typescript
public readonly route53Ops: Route53Options;
```

- *Type:* <a href="#cdk-fargate-patterns.Route53Options">Route53Options</a>

---

##### `spot`<sup>Optional</sup> <a name="spot" id="cdk-fargate-patterns.DualNlbFargateServiceProps.property.spot"></a>

```typescript
public readonly spot: boolean;
```

- *Type:* boolean
- *Default:* false

create a FARGATE_SPOT only cluster.

---

##### `spotTerminationHandler`<sup>Optional</sup> <a name="spotTerminationHandler" id="cdk-fargate-patterns.DualNlbFargateServiceProps.property.spotTerminationHandler"></a>

```typescript
public readonly spotTerminationHandler: boolean;
```

- *Type:* boolean
- *Default:* true

Enable the fargate spot termination handler.

> [https://docs.aws.amazon.com/AmazonECS/latest/developerguide/fargate-capacity-providers.html#fargate-capacity-providers-termination](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/fargate-capacity-providers.html#fargate-capacity-providers-termination)

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="cdk-fargate-patterns.DualNlbFargateServiceProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

---

##### `vpcSubnets`<sup>Optional</sup> <a name="vpcSubnets" id="cdk-fargate-patterns.DualNlbFargateServiceProps.property.vpcSubnets"></a>

```typescript
public readonly vpcSubnets: SubnetSelection;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection
- *Default:* { subnetType: ec2.SubnetType.PRIVATE, }

The subnets to associate with the service.

---

### FargateTaskProps <a name="FargateTaskProps" id="cdk-fargate-patterns.FargateTaskProps"></a>

Task properties for the Fargate.

#### Initializer <a name="Initializer" id="cdk-fargate-patterns.FargateTaskProps.Initializer"></a>

```typescript
import { FargateTaskProps } from 'cdk-fargate-patterns'

const fargateTaskProps: FargateTaskProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-fargate-patterns.FargateTaskProps.property.task">task</a></code> | <code>aws-cdk-lib.aws_ecs.FargateTaskDefinition</code> | *No description.* |
| <code><a href="#cdk-fargate-patterns.FargateTaskProps.property.capacityProviderStrategy">capacityProviderStrategy</a></code> | <code>aws-cdk-lib.aws_ecs.CapacityProviderStrategy[]</code> | Customized capacity provider strategy. |
| <code><a href="#cdk-fargate-patterns.FargateTaskProps.property.desiredCount">desiredCount</a></code> | <code>number</code> | desired number of tasks for the service. |
| <code><a href="#cdk-fargate-patterns.FargateTaskProps.property.external">external</a></code> | <code><a href="#cdk-fargate-patterns.LoadBalancerAccessibility">LoadBalancerAccessibility</a></code> | The external ELB listener. |
| <code><a href="#cdk-fargate-patterns.FargateTaskProps.property.healthCheck">healthCheck</a></code> | <code>aws-cdk-lib.aws_elasticloadbalancingv2.HealthCheck</code> | health check from elbv2 target group. |
| <code><a href="#cdk-fargate-patterns.FargateTaskProps.property.healthCheckGracePeriod">healthCheckGracePeriod</a></code> | <code>aws-cdk-lib.Duration</code> | The period of time, in seconds, that the Amazon ECS service scheduler ignores unhealthy Elastic Load Balancing target health checks after a task has first started. |
| <code><a href="#cdk-fargate-patterns.FargateTaskProps.property.internal">internal</a></code> | <code><a href="#cdk-fargate-patterns.LoadBalancerAccessibility">LoadBalancerAccessibility</a></code> | The internal ELB listener. |
| <code><a href="#cdk-fargate-patterns.FargateTaskProps.property.maxHealthyPercent">maxHealthyPercent</a></code> | <code>number</code> | The maximum number of tasks, specified as a percentage of the Amazon ECS service's DesiredCount value, that can run in a service during a deployment. |
| <code><a href="#cdk-fargate-patterns.FargateTaskProps.property.minHealthyPercent">minHealthyPercent</a></code> | <code>number</code> | The minimum number of tasks, specified as a percentage of the Amazon ECS service's DesiredCount value, that must continue to run and remain healthy during a deployment. |
| <code><a href="#cdk-fargate-patterns.FargateTaskProps.property.protocol">protocol</a></code> | <code>aws-cdk-lib.aws_elasticloadbalancingv2.Protocol</code> | The target group protocol for NLB. |
| <code><a href="#cdk-fargate-patterns.FargateTaskProps.property.protocolVersion">protocolVersion</a></code> | <code>aws-cdk-lib.aws_elasticloadbalancingv2.ApplicationProtocolVersion</code> | The protocol version to use. |
| <code><a href="#cdk-fargate-patterns.FargateTaskProps.property.scalingPolicy">scalingPolicy</a></code> | <code><a href="#cdk-fargate-patterns.ServiceScalingPolicy">ServiceScalingPolicy</a></code> | service autoscaling policy. |
| <code><a href="#cdk-fargate-patterns.FargateTaskProps.property.serviceName">serviceName</a></code> | <code>string</code> | The serviceName. |

---

##### `task`<sup>Required</sup> <a name="task" id="cdk-fargate-patterns.FargateTaskProps.property.task"></a>

```typescript
public readonly task: FargateTaskDefinition;
```

- *Type:* aws-cdk-lib.aws_ecs.FargateTaskDefinition

---

##### `capacityProviderStrategy`<sup>Optional</sup> <a name="capacityProviderStrategy" id="cdk-fargate-patterns.FargateTaskProps.property.capacityProviderStrategy"></a>

```typescript
public readonly capacityProviderStrategy: CapacityProviderStrategy[];
```

- *Type:* aws-cdk-lib.aws_ecs.CapacityProviderStrategy[]

Customized capacity provider strategy.

---

##### `desiredCount`<sup>Optional</sup> <a name="desiredCount" id="cdk-fargate-patterns.FargateTaskProps.property.desiredCount"></a>

```typescript
public readonly desiredCount: number;
```

- *Type:* number
- *Default:* 1

desired number of tasks for the service.

---

##### `external`<sup>Optional</sup> <a name="external" id="cdk-fargate-patterns.FargateTaskProps.property.external"></a>

```typescript
public readonly external: LoadBalancerAccessibility;
```

- *Type:* <a href="#cdk-fargate-patterns.LoadBalancerAccessibility">LoadBalancerAccessibility</a>
- *Default:* no external listener

The external ELB listener.

---

##### `healthCheck`<sup>Optional</sup> <a name="healthCheck" id="cdk-fargate-patterns.FargateTaskProps.property.healthCheck"></a>

```typescript
public readonly healthCheck: HealthCheck;
```

- *Type:* aws-cdk-lib.aws_elasticloadbalancingv2.HealthCheck

health check from elbv2 target group.

---

##### `healthCheckGracePeriod`<sup>Optional</sup> <a name="healthCheckGracePeriod" id="cdk-fargate-patterns.FargateTaskProps.property.healthCheckGracePeriod"></a>

```typescript
public readonly healthCheckGracePeriod: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* cdk.Duration.seconds(60),

The period of time, in seconds, that the Amazon ECS service scheduler ignores unhealthy Elastic Load Balancing target health checks after a task has first started.

---

##### `internal`<sup>Optional</sup> <a name="internal" id="cdk-fargate-patterns.FargateTaskProps.property.internal"></a>

```typescript
public readonly internal: LoadBalancerAccessibility;
```

- *Type:* <a href="#cdk-fargate-patterns.LoadBalancerAccessibility">LoadBalancerAccessibility</a>
- *Default:* no internal listener

The internal ELB listener.

---

##### `maxHealthyPercent`<sup>Optional</sup> <a name="maxHealthyPercent" id="cdk-fargate-patterns.FargateTaskProps.property.maxHealthyPercent"></a>

```typescript
public readonly maxHealthyPercent: number;
```

- *Type:* number
- *Default:* 200

The maximum number of tasks, specified as a percentage of the Amazon ECS service's DesiredCount value, that can run in a service during a deployment.

---

##### `minHealthyPercent`<sup>Optional</sup> <a name="minHealthyPercent" id="cdk-fargate-patterns.FargateTaskProps.property.minHealthyPercent"></a>

```typescript
public readonly minHealthyPercent: number;
```

- *Type:* number
- *Default:* 50

The minimum number of tasks, specified as a percentage of the Amazon ECS service's DesiredCount value, that must continue to run and remain healthy during a deployment.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="cdk-fargate-patterns.FargateTaskProps.property.protocol"></a>

```typescript
public readonly protocol: Protocol;
```

- *Type:* aws-cdk-lib.aws_elasticloadbalancingv2.Protocol
- *Default:* TCP

The target group protocol for NLB.

For ALB, this option will be ignored and always set to HTTP.

---

##### `protocolVersion`<sup>Optional</sup> <a name="protocolVersion" id="cdk-fargate-patterns.FargateTaskProps.property.protocolVersion"></a>

```typescript
public readonly protocolVersion: ApplicationProtocolVersion;
```

- *Type:* aws-cdk-lib.aws_elasticloadbalancingv2.ApplicationProtocolVersion

The protocol version to use.

---

##### `scalingPolicy`<sup>Optional</sup> <a name="scalingPolicy" id="cdk-fargate-patterns.FargateTaskProps.property.scalingPolicy"></a>

```typescript
public readonly scalingPolicy: ServiceScalingPolicy;
```

- *Type:* <a href="#cdk-fargate-patterns.ServiceScalingPolicy">ServiceScalingPolicy</a>
- *Default:* { maxCapacity: 10, targetCpuUtilization: 50, requestsPerTarget: 1000 }

service autoscaling policy.

---

##### `serviceName`<sup>Optional</sup> <a name="serviceName" id="cdk-fargate-patterns.FargateTaskProps.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string
- *Default:* auto-generated

The serviceName.

---

### LaravelProps <a name="LaravelProps" id="cdk-fargate-patterns.LaravelProps"></a>

#### Initializer <a name="Initializer" id="cdk-fargate-patterns.LaravelProps.Initializer"></a>

```typescript
import { LaravelProps } from 'cdk-fargate-patterns'

const laravelProps: LaravelProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-fargate-patterns.LaravelProps.property.code">code</a></code> | <code>string</code> | The local path to the Laravel code base. |
| <code><a href="#cdk-fargate-patterns.LaravelProps.property.loadbalancer">loadbalancer</a></code> | <code><a href="#cdk-fargate-patterns.LoadBalancerAccessibility">LoadBalancerAccessibility</a></code> | The loadbalancer accessibility for the service. |
| <code><a href="#cdk-fargate-patterns.LaravelProps.property.auroraServerless">auroraServerless</a></code> | <code>boolean</code> | Whether to use aurora serverless. |
| <code><a href="#cdk-fargate-patterns.LaravelProps.property.backupRetention">backupRetention</a></code> | <code>aws-cdk-lib.Duration</code> | database backup retension. |
| <code><a href="#cdk-fargate-patterns.LaravelProps.property.clusterEngine">clusterEngine</a></code> | <code>aws-cdk-lib.aws_rds.IClusterEngine</code> | The database cluster engine. |
| <code><a href="#cdk-fargate-patterns.LaravelProps.property.containerPort">containerPort</a></code> | <code>number</code> | The Laravel container port. |
| <code><a href="#cdk-fargate-patterns.LaravelProps.property.databaseInstanceType">databaseInstanceType</a></code> | <code>aws-cdk-lib.aws_ec2.InstanceType</code> | Database instance type. |
| <code><a href="#cdk-fargate-patterns.LaravelProps.property.databaseSubnets">databaseSubnets</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | VPC subnets for database. |
| <code><a href="#cdk-fargate-patterns.LaravelProps.property.defaultDatabaseName">defaultDatabaseName</a></code> | <code>string</code> | The default database name to create. |
| <code><a href="#cdk-fargate-patterns.LaravelProps.property.efsFileSystem">efsFileSystem</a></code> | <code>aws-cdk-lib.aws_efs.FileSystemProps</code> | Options to create the EFS FileSystem. |
| <code><a href="#cdk-fargate-patterns.LaravelProps.property.enableExecuteCommand">enableExecuteCommand</a></code> | <code>boolean</code> | enable ECS Exec. |
| <code><a href="#cdk-fargate-patterns.LaravelProps.property.instanceEngine">instanceEngine</a></code> | <code>aws-cdk-lib.aws_rds.IInstanceEngine</code> | The database instance engine. |
| <code><a href="#cdk-fargate-patterns.LaravelProps.property.serviceProps">serviceProps</a></code> | <code><a href="#cdk-fargate-patterns.FargateTaskProps">FargateTaskProps</a></code> | task options for the Laravel fargate service. |
| <code><a href="#cdk-fargate-patterns.LaravelProps.property.singleDbInstance">singleDbInstance</a></code> | <code>boolean</code> | Whether to use single RDS instance rather than RDS cluster. |
| <code><a href="#cdk-fargate-patterns.LaravelProps.property.spot">spot</a></code> | <code>boolean</code> | enable fargate spot. |
| <code><a href="#cdk-fargate-patterns.LaravelProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | *No description.* |

---

##### `code`<sup>Required</sup> <a name="code" id="cdk-fargate-patterns.LaravelProps.property.code"></a>

```typescript
public readonly code: string;
```

- *Type:* string

The local path to the Laravel code base.

---

##### `loadbalancer`<sup>Required</sup> <a name="loadbalancer" id="cdk-fargate-patterns.LaravelProps.property.loadbalancer"></a>

```typescript
public readonly loadbalancer: LoadBalancerAccessibility;
```

- *Type:* <a href="#cdk-fargate-patterns.LoadBalancerAccessibility">LoadBalancerAccessibility</a>

The loadbalancer accessibility for the service.

---

##### `auroraServerless`<sup>Optional</sup> <a name="auroraServerless" id="cdk-fargate-patterns.LaravelProps.property.auroraServerless"></a>

```typescript
public readonly auroraServerless: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to use aurora serverless.

When enabled, the `databaseInstanceType` and
`engine` will be ignored. The `rds.DatabaseClusterEngine.AURORA_MYSQL` will be used as
the default cluster engine instead.

---

##### `backupRetention`<sup>Optional</sup> <a name="backupRetention" id="cdk-fargate-patterns.LaravelProps.property.backupRetention"></a>

```typescript
public readonly backupRetention: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* 7 days

database backup retension.

---

##### `clusterEngine`<sup>Optional</sup> <a name="clusterEngine" id="cdk-fargate-patterns.LaravelProps.property.clusterEngine"></a>

```typescript
public readonly clusterEngine: IClusterEngine;
```

- *Type:* aws-cdk-lib.aws_rds.IClusterEngine
- *Default:* rds.AuroraMysqlEngineVersion.VER_2_09_1

The database cluster engine.

---

##### `containerPort`<sup>Optional</sup> <a name="containerPort" id="cdk-fargate-patterns.LaravelProps.property.containerPort"></a>

```typescript
public readonly containerPort: number;
```

- *Type:* number
- *Default:* 80

The Laravel container port.

---

##### `databaseInstanceType`<sup>Optional</sup> <a name="databaseInstanceType" id="cdk-fargate-patterns.LaravelProps.property.databaseInstanceType"></a>

```typescript
public readonly databaseInstanceType: InstanceType;
```

- *Type:* aws-cdk-lib.aws_ec2.InstanceType
- *Default:* r5.large

Database instance type.

---

##### `databaseSubnets`<sup>Optional</sup> <a name="databaseSubnets" id="cdk-fargate-patterns.LaravelProps.property.databaseSubnets"></a>

```typescript
public readonly databaseSubnets: SubnetSelection;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection
- *Default:* VPC isolated subnets

VPC subnets for database.

---

##### `defaultDatabaseName`<sup>Optional</sup> <a name="defaultDatabaseName" id="cdk-fargate-patterns.LaravelProps.property.defaultDatabaseName"></a>

```typescript
public readonly defaultDatabaseName: string;
```

- *Type:* string

The default database name to create.

---

##### `efsFileSystem`<sup>Optional</sup> <a name="efsFileSystem" id="cdk-fargate-patterns.LaravelProps.property.efsFileSystem"></a>

```typescript
public readonly efsFileSystem: FileSystemProps;
```

- *Type:* aws-cdk-lib.aws_efs.FileSystemProps

Options to create the EFS FileSystem.

---

##### `enableExecuteCommand`<sup>Optional</sup> <a name="enableExecuteCommand" id="cdk-fargate-patterns.LaravelProps.property.enableExecuteCommand"></a>

```typescript
public readonly enableExecuteCommand: boolean;
```

- *Type:* boolean

enable ECS Exec.

---

##### `instanceEngine`<sup>Optional</sup> <a name="instanceEngine" id="cdk-fargate-patterns.LaravelProps.property.instanceEngine"></a>

```typescript
public readonly instanceEngine: IInstanceEngine;
```

- *Type:* aws-cdk-lib.aws_rds.IInstanceEngine
- *Default:* MySQL 8.0.21

The database instance engine.

---

##### `serviceProps`<sup>Optional</sup> <a name="serviceProps" id="cdk-fargate-patterns.LaravelProps.property.serviceProps"></a>

```typescript
public readonly serviceProps: FargateTaskProps;
```

- *Type:* <a href="#cdk-fargate-patterns.FargateTaskProps">FargateTaskProps</a>

task options for the Laravel fargate service.

---

##### `singleDbInstance`<sup>Optional</sup> <a name="singleDbInstance" id="cdk-fargate-patterns.LaravelProps.property.singleDbInstance"></a>

```typescript
public readonly singleDbInstance: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to use single RDS instance rather than RDS cluster.

Not recommended for production.

---

##### `spot`<sup>Optional</sup> <a name="spot" id="cdk-fargate-patterns.LaravelProps.property.spot"></a>

```typescript
public readonly spot: boolean;
```

- *Type:* boolean

enable fargate spot.

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="cdk-fargate-patterns.LaravelProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

---

### LoadBalancerAccessibility <a name="LoadBalancerAccessibility" id="cdk-fargate-patterns.LoadBalancerAccessibility"></a>

The load balancer accessibility.

#### Initializer <a name="Initializer" id="cdk-fargate-patterns.LoadBalancerAccessibility.Initializer"></a>

```typescript
import { LoadBalancerAccessibility } from 'cdk-fargate-patterns'

const loadBalancerAccessibility: LoadBalancerAccessibility = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-fargate-patterns.LoadBalancerAccessibility.property.port">port</a></code> | <code>number</code> | The port of the listener. |
| <code><a href="#cdk-fargate-patterns.LoadBalancerAccessibility.property.certificate">certificate</a></code> | <code>aws-cdk-lib.aws_certificatemanager.ICertificate[]</code> | The ACM certificate for the HTTPS listener. |
| <code><a href="#cdk-fargate-patterns.LoadBalancerAccessibility.property.forwardConditions">forwardConditions</a></code> | <code>aws-cdk-lib.aws_elasticloadbalancingv2.ListenerCondition[][]</code> | Listener forward conditions. |

---

##### `port`<sup>Required</sup> <a name="port" id="cdk-fargate-patterns.LoadBalancerAccessibility.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

The port of the listener.

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="cdk-fargate-patterns.LoadBalancerAccessibility.property.certificate"></a>

```typescript
public readonly certificate: ICertificate[];
```

- *Type:* aws-cdk-lib.aws_certificatemanager.ICertificate[]
- *Default:* no certificate(HTTP only)

The ACM certificate for the HTTPS listener.

---

##### `forwardConditions`<sup>Optional</sup> <a name="forwardConditions" id="cdk-fargate-patterns.LoadBalancerAccessibility.property.forwardConditions"></a>

```typescript
public readonly forwardConditions: ListenerCondition[][];
```

- *Type:* aws-cdk-lib.aws_elasticloadbalancingv2.ListenerCondition[][]
- *Default:* no forward conditions.

Listener forward conditions.

---

### Route53Options <a name="Route53Options" id="cdk-fargate-patterns.Route53Options"></a>

#### Initializer <a name="Initializer" id="cdk-fargate-patterns.Route53Options.Initializer"></a>

```typescript
import { Route53Options } from 'cdk-fargate-patterns'

const route53Options: Route53Options = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-fargate-patterns.Route53Options.property.enableLoadBalancerAlias">enableLoadBalancerAlias</a></code> | <code>boolean</code> | Whether to configure the ALIAS for the LB. |
| <code><a href="#cdk-fargate-patterns.Route53Options.property.externalElbRecordName">externalElbRecordName</a></code> | <code>string</code> | the external ELB record name. |
| <code><a href="#cdk-fargate-patterns.Route53Options.property.internalElbRecordName">internalElbRecordName</a></code> | <code>string</code> | the internal ELB record name. |
| <code><a href="#cdk-fargate-patterns.Route53Options.property.zoneName">zoneName</a></code> | <code>string</code> | private zone name. |

---

##### `enableLoadBalancerAlias`<sup>Optional</sup> <a name="enableLoadBalancerAlias" id="cdk-fargate-patterns.Route53Options.property.enableLoadBalancerAlias"></a>

```typescript
public readonly enableLoadBalancerAlias: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to configure the ALIAS for the LB.

---

##### `externalElbRecordName`<sup>Optional</sup> <a name="externalElbRecordName" id="cdk-fargate-patterns.Route53Options.property.externalElbRecordName"></a>

```typescript
public readonly externalElbRecordName: string;
```

- *Type:* string
- *Default:* external

the external ELB record name.

---

##### `internalElbRecordName`<sup>Optional</sup> <a name="internalElbRecordName" id="cdk-fargate-patterns.Route53Options.property.internalElbRecordName"></a>

```typescript
public readonly internalElbRecordName: string;
```

- *Type:* string
- *Default:* internal

the internal ELB record name.

---

##### `zoneName`<sup>Optional</sup> <a name="zoneName" id="cdk-fargate-patterns.Route53Options.property.zoneName"></a>

```typescript
public readonly zoneName: string;
```

- *Type:* string
- *Default:* svc.local

private zone name.

---

### ServiceScalingPolicy <a name="ServiceScalingPolicy" id="cdk-fargate-patterns.ServiceScalingPolicy"></a>

#### Initializer <a name="Initializer" id="cdk-fargate-patterns.ServiceScalingPolicy.Initializer"></a>

```typescript
import { ServiceScalingPolicy } from 'cdk-fargate-patterns'

const serviceScalingPolicy: ServiceScalingPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-fargate-patterns.ServiceScalingPolicy.property.maxCapacity">maxCapacity</a></code> | <code>number</code> | max capacity for the service autoscaling. |
| <code><a href="#cdk-fargate-patterns.ServiceScalingPolicy.property.minCapacity">minCapacity</a></code> | <code>number</code> | min capacity for the service autoscaling. |
| <code><a href="#cdk-fargate-patterns.ServiceScalingPolicy.property.requestPerTarget">requestPerTarget</a></code> | <code>number</code> | request per target. |
| <code><a href="#cdk-fargate-patterns.ServiceScalingPolicy.property.targetCpuUtilization">targetCpuUtilization</a></code> | <code>number</code> | target cpu utilization. |

---

##### `maxCapacity`<sup>Optional</sup> <a name="maxCapacity" id="cdk-fargate-patterns.ServiceScalingPolicy.property.maxCapacity"></a>

```typescript
public readonly maxCapacity: number;
```

- *Type:* number
- *Default:* 10

max capacity for the service autoscaling.

---

##### `minCapacity`<sup>Optional</sup> <a name="minCapacity" id="cdk-fargate-patterns.ServiceScalingPolicy.property.minCapacity"></a>

```typescript
public readonly minCapacity: number;
```

- *Type:* number
- *Default:* 1

min capacity for the service autoscaling.

---

##### `requestPerTarget`<sup>Optional</sup> <a name="requestPerTarget" id="cdk-fargate-patterns.ServiceScalingPolicy.property.requestPerTarget"></a>

```typescript
public readonly requestPerTarget: number;
```

- *Type:* number
- *Default:* 1000

request per target.

---

##### `targetCpuUtilization`<sup>Optional</sup> <a name="targetCpuUtilization" id="cdk-fargate-patterns.ServiceScalingPolicy.property.targetCpuUtilization"></a>

```typescript
public readonly targetCpuUtilization: number;
```

- *Type:* number
- *Default:* 50

target cpu utilization.

---

### WordPressProps <a name="WordPressProps" id="cdk-fargate-patterns.WordPressProps"></a>

#### Initializer <a name="Initializer" id="cdk-fargate-patterns.WordPressProps.Initializer"></a>

```typescript
import { WordPressProps } from 'cdk-fargate-patterns'

const wordPressProps: WordPressProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-fargate-patterns.WordPressProps.property.auroraServerless">auroraServerless</a></code> | <code>boolean</code> | Whether to use aurora serverless. |
| <code><a href="#cdk-fargate-patterns.WordPressProps.property.backupRetention">backupRetention</a></code> | <code>aws-cdk-lib.Duration</code> | database backup retension. |
| <code><a href="#cdk-fargate-patterns.WordPressProps.property.clusterEngine">clusterEngine</a></code> | <code>aws-cdk-lib.aws_rds.IClusterEngine</code> | The database cluster engine. |
| <code><a href="#cdk-fargate-patterns.WordPressProps.property.databaseInstanceType">databaseInstanceType</a></code> | <code>aws-cdk-lib.aws_ec2.InstanceType</code> | Database instance type. |
| <code><a href="#cdk-fargate-patterns.WordPressProps.property.databaseSubnets">databaseSubnets</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | VPC subnets for database. |
| <code><a href="#cdk-fargate-patterns.WordPressProps.property.enableExecuteCommand">enableExecuteCommand</a></code> | <code>boolean</code> | enable ECS Exec. |
| <code><a href="#cdk-fargate-patterns.WordPressProps.property.instanceEngine">instanceEngine</a></code> | <code>aws-cdk-lib.aws_rds.IInstanceEngine</code> | The database instance engine. |
| <code><a href="#cdk-fargate-patterns.WordPressProps.property.serviceProps">serviceProps</a></code> | <code><a href="#cdk-fargate-patterns.FargateTaskProps">FargateTaskProps</a></code> | task options for the WordPress fargate service. |
| <code><a href="#cdk-fargate-patterns.WordPressProps.property.singleDbInstance">singleDbInstance</a></code> | <code>boolean</code> | Whether to use single RDS instance rather than RDS cluster. |
| <code><a href="#cdk-fargate-patterns.WordPressProps.property.spot">spot</a></code> | <code>boolean</code> | enable fargate spot. |
| <code><a href="#cdk-fargate-patterns.WordPressProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | *No description.* |

---

##### `auroraServerless`<sup>Optional</sup> <a name="auroraServerless" id="cdk-fargate-patterns.WordPressProps.property.auroraServerless"></a>

```typescript
public readonly auroraServerless: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to use aurora serverless.

When enabled, the `databaseInstanceType` and
`engine` will be ignored. The `rds.DatabaseClusterEngine.AURORA_MYSQL` will be used as
the default cluster engine instead.

---

##### `backupRetention`<sup>Optional</sup> <a name="backupRetention" id="cdk-fargate-patterns.WordPressProps.property.backupRetention"></a>

```typescript
public readonly backupRetention: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* 7 days

database backup retension.

---

##### `clusterEngine`<sup>Optional</sup> <a name="clusterEngine" id="cdk-fargate-patterns.WordPressProps.property.clusterEngine"></a>

```typescript
public readonly clusterEngine: IClusterEngine;
```

- *Type:* aws-cdk-lib.aws_rds.IClusterEngine
- *Default:* rds.AuroraMysqlEngineVersion.VER_2_09_1

The database cluster engine.

---

##### `databaseInstanceType`<sup>Optional</sup> <a name="databaseInstanceType" id="cdk-fargate-patterns.WordPressProps.property.databaseInstanceType"></a>

```typescript
public readonly databaseInstanceType: InstanceType;
```

- *Type:* aws-cdk-lib.aws_ec2.InstanceType
- *Default:* r5.large

Database instance type.

---

##### `databaseSubnets`<sup>Optional</sup> <a name="databaseSubnets" id="cdk-fargate-patterns.WordPressProps.property.databaseSubnets"></a>

```typescript
public readonly databaseSubnets: SubnetSelection;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection
- *Default:* VPC isolated subnets

VPC subnets for database.

---

##### `enableExecuteCommand`<sup>Optional</sup> <a name="enableExecuteCommand" id="cdk-fargate-patterns.WordPressProps.property.enableExecuteCommand"></a>

```typescript
public readonly enableExecuteCommand: boolean;
```

- *Type:* boolean

enable ECS Exec.

---

##### `instanceEngine`<sup>Optional</sup> <a name="instanceEngine" id="cdk-fargate-patterns.WordPressProps.property.instanceEngine"></a>

```typescript
public readonly instanceEngine: IInstanceEngine;
```

- *Type:* aws-cdk-lib.aws_rds.IInstanceEngine
- *Default:* MySQL 8.0.21

The database instance engine.

---

##### `serviceProps`<sup>Optional</sup> <a name="serviceProps" id="cdk-fargate-patterns.WordPressProps.property.serviceProps"></a>

```typescript
public readonly serviceProps: FargateTaskProps;
```

- *Type:* <a href="#cdk-fargate-patterns.FargateTaskProps">FargateTaskProps</a>

task options for the WordPress fargate service.

---

##### `singleDbInstance`<sup>Optional</sup> <a name="singleDbInstance" id="cdk-fargate-patterns.WordPressProps.property.singleDbInstance"></a>

```typescript
public readonly singleDbInstance: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to use single RDS instance rather than RDS cluster.

Not recommended for production.

---

##### `spot`<sup>Optional</sup> <a name="spot" id="cdk-fargate-patterns.WordPressProps.property.spot"></a>

```typescript
public readonly spot: boolean;
```

- *Type:* boolean

enable fargate spot.

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="cdk-fargate-patterns.WordPressProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

---



