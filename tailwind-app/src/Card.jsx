import imgDefault from './assets/react.svg';

function Card(props) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <a href={props.productRef ? props.productRef : '#'}>
        <img className="rounded-t-lg w-full h-48 object-cover" src={props.image ? props.image : imgDefault} alt={props.title} />
      </a>
      <div className="p-5">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{props.title ?? 'Title'}</h5>
        <p className="mb-3 text-sm text-gray-700 dark:text-gray-400">{props.paragraph ?? 'Body description'}</p>
        <a href={props.productRef ?? '#'} className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800">
          Ver producto
        </a>
      </div>
    </div>
  );
}

export default Card;
