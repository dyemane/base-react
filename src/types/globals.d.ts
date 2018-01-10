declare module '*.scss' {
  const _: any
  export default _
}
declare module 'mobx-react' {
  type ComponentClass<P> = React.ComponentClass<P>
  type StatelessComponent<P> = React.StatelessComponent<P>
  type Component<P> = ComponentClass<P> | StatelessComponent<P>

  interface Mapper<TMapperProps, TOwnProps> {
    (stores: any, ownProps?: TOwnProps): TMapperProps
  }

  interface ComponentDecorator<TMergedProps, TOwnProps> {
    (component: Component<TOwnProps & TMergedProps>): ComponentClass<TOwnProps>
  }

  export function inject<TConnectedProps, TOwnProps>(mapper: Mapper<TConnectedProps, TOwnProps>):ComponentDecorator<TConnectedProps, TOwnProps>
  export function observer<T>(component: T): T
  export class Provider extends React.Component<any, {}>{}
}
